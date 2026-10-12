# Usage

Use `@eliware/path` to compose paths from a module location or a directory path.
The package supports Node.js 26 or later and native ESM.

## Install

Run this command in your project:

```text
npm install @eliware/path
```

The package has no runtime dependencies.
TypeScript declarations ship with the package.

## Import the package

Use the default export for path composition:

```js
import path from "@eliware/path";

const configPath = path(import.meta, "config", "app.json");
```

Use named exports for other operations:

```js
import { pathUrl, resolvePath, relativePath, fileUrlToPath } from "@eliware/path";

const moduleUrl = pathUrl(import.meta, "modules", "tool.mjs");
const absolutePath = resolvePath(import.meta, "data", "input.json");
const relative = relativePath(import.meta, "data", "input.json");
const localPath = fileUrlToPath(moduleUrl);
```

Each helper also has a named export. The default export is the same function as the named `path` export.

## Select a base

Pass `import.meta` to use the current module directory:

```js
const configPath = path(import.meta, "config.json");
```

Pass a directory string to use that directory:

```js
import path from "@eliware/path";

const configPath = path(process.cwd(), "config.json");
```

The package treats every string base as a directory path.
It does not treat a string as a module file path.

## Create a file URL

Use `pathUrl` when an API needs a file URL:

```js
import { pathUrl } from "@eliware/path";

const moduleUrl = pathUrl(import.meta, "plugins", "tool.mjs");
const plugin = await import(moduleUrl);
```

`pathUrl` returns a URL string.
The caller controls the dynamic import.

## Use TypeScript

Import the package as an ESM module:

```ts
import path, { pathUrl } from "@eliware/path";

const configPath: string = path(import.meta, "config.json");
const configUrl: string = pathUrl(import.meta, "config.json");
```

TypeScript declarations ship with the package.
The package does not require a separate type package.

## Choose a helper

Read the [API reference](api.md) to choose a helper.
Read [operations and safety](operations.md) before you use untrusted path segments.
