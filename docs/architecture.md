# Package files

Use this guide to find the files that define the package and its public API.

## Package entry

[`src/index.mjs`](../src/index.mjs) exports the public API.
Import the package name in an ESM module:

```js
import path from "@eliware/path";
```

The package includes TypeScript declarations in [`src/index.d.ts`](../src/index.d.ts).
The declarations describe the runtime exports and public types.
The package does not provide a CommonJS entry point.

## Package contents

The npm package includes runtime modules, TypeScript declarations, guides, examples, and repository specifications.
The package also includes the README, release notes, license, and package instructions.
The package uses `@eliware/log` for structured logging.

## Helper modules

[`src/path-base.mjs`](../src/path-base.mjs) reads the starting directory from a module URL or string.
[`src/current-path.mjs`](../src/current-path.mjs) composes and resolves paths.
[`src/conversions.mjs`](../src/conversions.mjs) converts paths to file URLs.
[`src/file-url-to-path.mjs`](../src/file-url-to-path.mjs) converts file URLs to paths.
[`src/create-path-helpers.mjs`](../src/create-path-helpers.mjs) adds optional logging to the public helpers.

## Use the guides

Read the [usage guide](usage.md) to install the package and select a helper.
Read the [API reference](api.md) for function inputs and results.
Read [operations and safety](operations.md) before you use paths from users.
