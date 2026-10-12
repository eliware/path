# API reference

The package exports one default function and seven named functions.
All functions run synchronously and return strings.

## Base input

Path helpers accept `ImportMeta` or a directory string.
Pass a string only when it names a directory.
Pass path segments as strings.

## `getCurrentFilename(metaOrDir)`

```ts
getCurrentFilename(metaOrDir: ImportMeta | string): string
```

With `ImportMeta`, the function converts `metaOrDir.url` to a file system path.
With a string, it returns that string without a change.
It does not add a file name to a directory string.

The function throws an error when the input is missing or when the module URL cannot form a file path.

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
It joins the base directory and the path segments with Node.js `path.join`.
The result uses the host platform's path rules.

## `pathUrl(metaOrDir, ...segments)`

```ts
pathUrl(metaOrDir: ImportMeta | string, ...segments: string[]): string
```

It joins the base directory and path segments.
It converts the result to a file URL and returns the URL string.
Use this result with APIs that accept file URLs.

## `resolvePath(metaOrDir, ...segments)`

```ts
resolvePath(metaOrDir: ImportMeta | string, ...segments: string[]): string
```

It resolves the base directory and path segments with Node.js `path.resolve`.
It returns an absolute path.
An absolute segment can replace the base path.

## `relativePath(metaOrDir, ...segments)`

```ts
relativePath(metaOrDir: ImportMeta | string, ...segments: string[]): string
```

It resolves the target from the base directory.
It returns a normalized path from the base directory to the target.
The result can contain `..` when the target is outside the base directory.
The result is an empty string when the target equals the base directory.

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
