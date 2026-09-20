# iris

## usage

```html
<script src="decompiler.js"></script>
<script>var txt = iris.decompile(bytes);</script>
```

```js
const iris = require("./decompiler.js");
console.log(iris.decompile(require("fs").readFileSync("script.bin")));
```

## how it works

1. **Split the file into its parts.** header (version + type version), the
   varint string table, then every proto. a proto is one function: how many
   registers and params it has, the code (4-byte little-endian instructions),
   the constant table (nil/bool/number/string/table/closure/vector/integer),
   child proto ids, and optional debug info that contains the original
   variable names.

2. **Unscramble the opcodes.** roblox hides the opcodes by xor-multiplying
   the opcode byte with a secret key. but the first instruction of any chunk
   is always `PREPVARARGS`, so the key falls out of that one byte and every
   instruction gets unscrambled (skipping AUX words, since some instructions
   are 2 words). files older than v14 also get the old `NEWCLASS` opcode
   renumbered (v14 added `FASTPCALL`, which bumped it from 89 to 90).

3. **See which values really matter.** walk the code backwards and mark which
   registers are still read later. registers that are never read again are
   scratch values the compiler created, so they just fold into their one use.
   registers that are read later need a name.

4. **Find the loops.** a backward jump means a loop. the instruction that
   opens it tells you the kind: `FORNPREP` is a counting `for i = ...`,
   `FORGPREP` is a `for k, v in pairs|ipairs(...)`, a conditional jump header
   is a `while`, otherwise `repeat`/`while true`. each loop records its body,
   backedge (where it jumps back), and exit (where it leaves).

5. **Turn the steps back into code.** walk forward again, decoding each
   instruction into expressions: `ADD` becomes a `+`, `NAMECALL` + `CALL`
   becomes `obj:Method()`, `GETTABLEKS` becomes `obj.Name`. conditional jumps
   turn into `if / elseif / else / end` chains. a guard jumping straight to
   the loop backedge becomes `continue`; a jump out of the loop becomes
   `break`; a tiny `LOADB true / LOADB false` pair becomes an if-expression.

6. **Handle functions inside functions.** `NEWCLOSURE`/`DUPCLOSURE` come with
   capture words that say which outer variables the inner function sees and
   whether by value or by reference. the inner proto gets decompiled the same
   way and is printed as `local function`, `function Name()`, a table field,
   or an inline function.

7. **Give everything a name.** priority order: real names from the debug info
   if any, otherwise guess from what the code does (`WaitForChild("Right
   Shoulder")` -> `RightShoulder`), otherwise type-based generated names
   (`num1`, `str1`, `tbl2`), otherwise `_` for values nobody reads. the same
   type hints produce parameter/return annotations and even table shapes like
   `{ id: string, weight: number }`.

8. **Tidy up the text.** remove dead locals, fold single-use temps,
   drop `x + 0`, turn `x = x + 1` into `x += 1` (luau only lets you compound
   plain names, so `tbl[1] = tbl[1] + 1` stays written out), flatten empty
   ifs, roll the weighted-random idiom back together, and either annotate or
   delete unused functions.

## check

```bash
node -e "const iris=require('./decompiler.js'),fs=require('fs');console.log(iris.decompile(new Uint8Array(fs.readFileSync('examples/health.bin'))))"
```

```lua
-- iris decompiler v1

local Humanoid = script.Parent:WaitForChild("Humanoid")
while var1 < num2 * Humanoid.MaxHealth do
	local var1 = wait(1)
	num2 = var1 * 0.01
	Humanoid.Health = math.min(Humanoid.Health + num2 * Humanoid.MaxHealth, Humanoid.MaxHealth)
end

var1 = Humanoid.HealthChanged
var1:Wait()
```
