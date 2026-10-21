# API reference

The package exports one default function, eight named functions, and three public types.
Path functions run synchronously and return strings.
The `createPathHelpers()` factory returns an object of path functions.

## Directory input

Path helpers accept `ImportMeta` or a directory string.
Pass a string only when it names a directory.
Pass path segments as strings.
The helpers do not check path existence.

## `getCurrentFilename(metaOrDir)`

```ts
getCurrentFilename(metaOrDir: ImportMeta | string): string
```

With `ImportMeta`, the function converts `metaOrDir.url` to a file system path.
With a string, it returns that string without a change.
It does not add a file name to a directory string.

The function throws an error when the input is missing or when the module URL does not identify a file path.

## `getCurrentDirname(metaOrDir, dirnameFn?)`

```ts
getCurrentDirname(
  metaOrDir: ImportMeta | string,
  dirnameFn?: (path: string) => string,
): string
```

With `ImportMeta`, the function gets the file path and calls `dirnameFn`.
The default function is Node.js `path.dirname`.
With a string, the function returns the string without a change.
It does not call `dirnameFn` for a string input.

## `path(metaOrDir, ...segments)`

```ts
path(metaOrDir: ImportMeta | string, ...segments: string[]): string
```

The default export and named `path` export refer to this function.
It joins the starting directory and the path segments with Node.js `path.join`.
The result uses the host platform's path rules.
The result can be relative when the directory input is relative.

## `pathUrl(metaOrDir, ...segments)`

```ts
pathUrl(metaOrDir: ImportMeta | string, ...segments: string[]): string
```

It joins the starting directory and path segments.
It converts the result to a file URL and returns the URL string.
Use this result with APIs that accept file URLs.
This function does not load a file or module.

## `resolvePath(metaOrDir, ...segments)`

```ts
resolvePath(metaOrDir: ImportMeta | string, ...segments: string[]): string
```

It resolves the starting directory and path segments with Node.js `path.resolve`.
It returns an absolute path.
An absolute segment can replace the starting path.
This function does not check path existence.

## `relativePath(metaOrDir, ...segments)`

```ts
relativePath(metaOrDir: ImportMeta | string, ...segments: string[]): string
```

It resolves the target from the starting directory.
It returns a normalized path from the starting directory to the target.
The result can contain `..` when the target is outside the starting directory.
The result is an empty string when the target equals the starting directory.
This function does not check path existence.

## `fileUrlToPath(fileUrl)`

```ts
fileUrlToPath(fileUrl: string | URL): string
```

It converts a file URL string or a `URL` object to a file system path.
It follows Node.js `fileURLToPath` rules.
Node.js throws an error when the input is not a valid file URL.

## Exports

Import the default function or the named functions:

```js
import path, {
  fileUrlToPath,
  getCurrentDirname,
  getCurrentFilename,
  pathUrl,
  relativePath,
  resolvePath,
} from "@eliware/path";
```

The package is native ESM.
It does not provide a CommonJS entry point.

## `createPathHelpers(options?)`

```ts
createPathHelpers(options?: { logger?: PathLogger }): PathHelpers
```

Create path helpers that write structured records to a logger.
The `PathLogger` type requires a Winston-style `log(info)` method.
If `logger` is omitted, the package uses the default logger from `@eliware/log`.
The returned object contains the same functions as the package root, except for the default export.

```js
import { createLogger } from "@eliware/log";
import { createPathHelpers } from "@eliware/path";

const paths = createPathHelpers({
  logger: createLogger({ level: "debug", format: "json" }),
});

const configPath = paths.path(import.meta, "config.json");
```

The helpers write completed operations at `debug` level.
They write errors at `error` level and rethrow the first error.
Records include the operation, input type, segment count when applicable, and result type.
Records omit input values, path results, and error messages to limit exposure of private data.

The logger supports `error`, `warn`, `info`, `http`, `verbose`, `debug`, and `silly` levels.
The helpers use `debug` and `error` because path operations do not send network requests.
Set the logger level to `debug` to receive operation records.
