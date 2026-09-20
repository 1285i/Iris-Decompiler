# iris Decompiler

# Usage

browser:

```html
<script src="decompiler.js"></script>
<script>
    const src = iris.decompile(new Uint8Array(buffer));   // file bytes
    const src = iris.decompileBase64("...");              // or paste base64 text
</script>
```

node:

```js
const iris = require("./decompiler.js");
const b = require("fs").readFileSync("script.bin");
console.log(iris.decompile(b));
```

`iris.read(input)` returns the raw program instead of the text, in case you
want to poke at it. `example.html` is a ready page: open it, pick a .bin, read
the script. nothing leaves your machine.

# QuickJS

quickjs doesn't have TextDecoder so the file ships its own byte decoder.

```
qjs.exe
> std.loadScript("decompiler.js");
> const f = std.open("script.bin", "rb");
> const bytes = new Uint8Array(f.readAsArrayBuffer());
> print(iris.decompile(bytes));
```

# How it works

- read the file. header, string table, then every function (proto): its
  instructions, its constants, its nested functions.
- unshuffle the opcodes. roblox multiplies the opcode byte by a secret key,
  but the first instruction is always the same one, so the key falls out of
  that byte. files older than v14 get one opcode renumbered.
- walk backwards and see which registers are read later. ones that aren't are
  temps, fold them into their one use.
- walk forwards. moves become expressions, conditional jumps become ifs,
  backward jumps become loops (the opening instruction says which kind),
  guard jumps become `continue`, loop-exit jumps become `break`.
- functions inside functions: read the capture words, decompile the child,
  print it back as a local function or whatever the compiler used it as.
- names: debug names if present, else `WaitForChild("Right Shoulder")` ->
  `RightShoulder`, else `num1`/`str1`/`tbl2`/`_`.
- tidy the text. dead locals, `x += 1`, empty ifs, weighted-random idiom.

# Testing

```bash
node -e "const iris=require('./decompiler.js'),fs=require('fs');console.log(iris.decompile(new Uint8Array(fs.readFileSync('examples/health.bin'))))"
```

`examples/health.bin` is real v14 bytecode. expect:

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

# Notes

- some if/else trees come out with a duplicated block instead of a neat
  elseif. correct, just not pretty.
- type names come from usage guesses
