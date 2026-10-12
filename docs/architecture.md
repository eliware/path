# Package files

Use this guide to find the files that define the package and its public API.

## Package entry

[`src/index.mjs`](../src/index.mjs) exports the public API.
Import the package name in an ESM module:

```js
import path from "@eliware/path";
```

The package includes TypeScript declarations in [`src/index.d.ts`](../src/index.d.ts).
The declarations describe the same exports as the runtime module.

## Helper modules

[`src/current-path.mjs`](../src/current-path.mjs) defines the path helpers.
[`src/conversions.mjs`](../src/conversions.mjs) defines the file URL helpers.

## Use the guides

Read the [usage guide](usage.md) to install the package and choose a helper.
Read the [API reference](api.md) for function inputs and results.
Read [operations and safety](operations.md) before you use paths from users.
