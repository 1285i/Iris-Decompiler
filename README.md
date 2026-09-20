# iris Decompiler

## Usage

browser:

```html
<script src="decompiler.js"></script>
<script>
    const src = iris.decompile(new Uint8Array(buffer));   // bytecode bytes
    const src = iris.decompileBase64("...");              // or paste base64 text
</script>
```

node:

```js
const iris = require("./decompiler.js");
const b = require("fs").readFileSync("script.bin");
console.log(iris.decompile(b));
```

## QuickJS

quickjs doesnt have text decoder so the decompiler ships its own byte decoder.

```
qjs.exe
> std.loadScript("decompiler.js");
> const f = std.open("script.bin", "rb");
> const bytes = new Uint8Array(f.readAsArrayBuffer());
> print(iris.decompile(bytes));
```

## API

- `iris.decompile(input)` — decompiled source as a string
- `iris.decompileBase64(b64)` — same, taking a base64 payload
- `iris.decompileResult(input)` — `{ source, program, version, decodedFromBase64 }`
- `iris.read(input)` — the raw parsed program
- `iris.disassemble(input)` / `iris.disassembleProto(input, index)` — low-level opcode listing
- `iris.Op`, `iris.ConstK`, `iris.OP_NAMES`, `iris.versionRange` — opcode/constant tables

`input` is either a `Uint8Array` of file bytes or an object with `bytes` or `base64`.

## How it works

- read the file header string table then every function (proto) its instructions, its constants, its nested functions.
- unshuffle the opcodes roblox multiplies the opcode byte by a secret key but the first instruction is always `PREPVARARGS` so the key falls out of that one byte files older than v14 get one opcode renumbered
- walk backwards and see which registers are read later ones that arent are temps fold them into their one use.
- walk forwards moves become expressions conditional jumps become `if`s backward jumps become loops (the opening instruction says which kind) guard jumps become `continue` loop-exit jumps become `break`.
- functions inside functions read the capture words decompile the child print it back as a local function or whatever the compiler used it as.
- tidy the text dead locals `x += 1`, empty ifs weighted random idiom.

#- everything is valid luau

## Testing

```bash
node -e "const iris=require('./decompiler.js'),fs=require('fs');console.log(iris.decompile(new Uint8Array(fs.readFileSync('examples/health.bin'))))"
```

```lua
local Humanoid = script.Parent:WaitForChild("Humanoid")
while variable1 < number2 * Humanoid.MaxHealth do
    local variable1 = wait(1)
    number2 = variable1 * 0.01
   Humanoid.Health = math.min(Humanoid.Health + number2 * Humanoid.MaxHealth, Humanoid.MaxHealth)
end

variable1 = Humanoid.HealthChanged
variable1:Wait()
```

## Notes

- some if/else trees come out with a duplicated block instead of a neat `elseif`. correct but looks like shit
