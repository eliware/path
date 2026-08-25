# [![eliware.org](https://eliware.org/logos/brand.png)](https://discord.gg/M6aTR9eTwN)

## @eliware/path [![npm version](https://img.shields.io/npm/v/@eliware/path.svg)](https://www.npmjs.com/package/@eliware/path)[![license](https://img.shields.io/github/license/eliware/path.svg)](LICENSE)[![build status](https://github.com/eliware/path/actions/workflows/nodejs.yml/badge.svg)](https://github.com/eliware/path/actions)

> A Node.js ESM-friendly path utility for resolving file and directory paths.

---

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
  - [ESM Example](#esm-example)
    - [Dynamic Import Example](#dynamic-import-example)
- [API](#api)
- [TypeScript](#typescript)
- [Security and operations](#security-and-operations)
- [Validation](#validation)
- [License](#license)

## Features

- Unified API for ESM: pass either `import.meta` or a string (like `__dirname`)
- Works seamlessly in Node.js and modern ESM environments
- TypeScript type definitions included
- Simple, dependency-free, and well-tested
- `pathUrl`, `resolvePath`, and `relativePath` helpers based on `import.meta`
- `fileUrlToPath` for converting file URLs back to filesystem paths

## Requirements

- Node.js 26 or newer
- Native ESM support

## Installation

```bash
npm install @eliware/path
```

## Usage

### ESM Example

```js
import path, { fileUrlToPath, pathUrl, relativePath, resolvePath } from '@eliware/path';

// for ESM, we need to pass import.meta
const envFile = path(import.meta, ".env");
console.log(envFile);

// Get a file URL href for dynamic import
const envFileUrl = pathUrl(import.meta, ".env");
console.log(envFileUrl);
// import(envFileUrl).then(mod => ...);
```

### Dynamic Import Example

```js
// ESM
import { pathUrl } from '@eliware/path';
const mod = await import(pathUrl(import.meta, './my-module.mjs'));

```

## API

### `getCurrentFilename(metaOrDir?: ImportMeta | string): string`

Returns the absolute path to the current file or directory. Pass `import.meta` (ESM) or a string (e.g. `__dirname`). Throws if unavailable.

### `getCurrentDirname(metaOrDir?: ImportMeta | string, dirnameFn?: (path: string) => string): string`

Returns the absolute path to the current directory. Pass `import.meta` (ESM) or a string (e.g. `__dirname`). Throws if unavailable.

### `default path(metaOrDir: ImportMeta | string, ...segments: string[]): string`

Joins the current dirname (from `import.meta` or a string) with provided segments to form an absolute path.

### `pathUrl(metaOrDir: ImportMeta | string, ...segments: string[]): string`

Returns a file URL href string for the resolved path, suitable for use with dynamic `import()` on all platforms.

### `resolvePath(metaOrDir: ImportMeta | string, ...segments: string[]): string`

Resolves path segments from the current directory and returns an absolute filesystem path.

### `relativePath(metaOrDir: ImportMeta | string, ...segments: string[]): string`

Returns the normalized path segments relative to the current directory.

### `fileUrlToPath(fileUrl: string | URL): string`

Converts a file URL string or `URL` object to a filesystem path.

## Errors / Troubleshooting

Pass `import.meta` or a directory string to the helpers. Missing or invalid bases throw an error. Paths use the host platform’s native separators; `pathUrl()` returns a file URL suitable for dynamic imports.

## Configuration

No configuration is required. Each helper accepts an `ImportMeta` value or a
directory string; `getCurrentDirname()` also accepts an optional injected
dirname function for custom path behavior and testing.

## Security and operations

These helpers do not access the filesystem or perform network I/O. They only
convert and compose paths. They do not sandbox path segments; validate
user-controlled input and enforce application-specific permissions before
reading or writing files.

## Validation

```bash
npm test
npm run lint
npm run typecheck
npm audit --omit=dev --audit-level=moderate
npm run pack
```

## TypeScript

Type definitions are included:

```ts
export function getCurrentFilename(metaOrDir?: ImportMeta | string): string;
export function getCurrentDirname(metaOrDir?: ImportMeta | string, dirnameFn?: (path: string) => string): string;
export const path: (metaOrDir: ImportMeta | string, ...segments: string[]) => string;
export function pathUrl(metaOrDir: ImportMeta | string, ...segments: string[]): string;
export function resolvePath(metaOrDir: ImportMeta | string, ...segments: string[]): string;
export function relativePath(metaOrDir: ImportMeta | string, ...segments: string[]): string;
export function fileUrlToPath(fileUrl: string | URL): string;
export default path;
```

## Support

For help, questions, or to chat with the author and community, visit:

[![Discord](https://eliware.org/logos/discord_96.png)](https://discord.gg/M6aTR9eTwN)[![eliware.org](https://eliware.org/logos/eliware_96.png)](https://discord.gg/M6aTR9eTwN)

**[eliware.org on Discord](https://discord.gg/M6aTR9eTwN)**

## License

[MIT © 2025 Eli Sterling, eliware.org](LICENSE)

## Links

- [Home Page](https://eliware.org)
- [GitHub](https://github.com/eliware/path)
- [npm](https://www.npmjs.com/package/@eliware/path)
- [Discord](https://discord.gg/M6aTR9eTwN)
