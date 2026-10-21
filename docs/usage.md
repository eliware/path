# Usage

Use `@eliware/path` to compose paths from a module location or a directory path.
The package supports Node.js 26 or later and native ESM.

## Install

Run this command in your project:

```text
npm install @eliware/path
```

The package uses `@eliware/log` for structured logging.
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

## Select a directory

Pass `import.meta` to use the current module directory:

```js
import path from "@eliware/path";

const configPath = path(import.meta, "config.json");
```

Pass a directory string to use that directory:

```js
import path from "@eliware/path";

const configPath = path(process.cwd(), "config.json");
```

The package uses every string input as a directory path.
It does not use a string as a module file path.

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

## Select a helper

Use `path` to join a directory and path segments.
Use `resolvePath` to return an absolute path.
Use `relativePath` to return a path from the directory to the target.
Use `pathUrl` to return a file URL string.
Use `fileUrlToPath` to convert a file URL to a path.
Use `getCurrentFilename` or `getCurrentDirname` to read a module path or directory.

Read the [API reference](api.md) for inputs, results, and errors.
Read [operations and safety](operations.md) before you use untrusted path segments.

## Log path operations

Create a helper set with the package logger:

```js
import { createPathHelpers } from "@eliware/path";

const paths = createPathHelpers();
const configPath = paths.path(import.meta, "config.json");
```

Inject a logger when your application needs its own level, format, or transports.
Install `@eliware/log` as a direct dependency before you import it:

```text
npm install @eliware/log
```

```js
import { createLogger } from "@eliware/log";
import { createPathHelpers } from "@eliware/path";

const logger = createLogger({ level: "debug", format: "json" });
const paths = createPathHelpers({ logger });
const configPath = paths.path(import.meta, "config.json");
```

The helper set logs completed operations at `debug` level and failures at `error` level.
The logger supports `error`, `warn`, `info`, `http`, `verbose`, `debug`, and `silly` levels.
The records omit path values, path results, and error messages.
