# [![eliware.org](https://eliware.org/logos/brand.png)](https://discord.gg/M6aTR9eTwN)

## @eliware/path [![npm](https://img.shields.io/npm/v/@eliware/path)](https://www.npmjs.com/package/@eliware/path) [![License](https://img.shields.io/github/license/eliware/path)](https://github.com/eliware/path/blob/main/LICENSE) [![CI](https://github.com/eliware/path/actions/workflows/ci.yaml/badge.svg)](https://github.com/eliware/path/actions/workflows/ci.yaml)

Import-meta-based path utilities for modern Node.js ESM applications.

## Table of Contents

- [Features](#features)
- [Requirements](#requirements)
- [Setup](#setup)
- [Usage](#usage)
- [Development](#development)
- [Testing](#testing)
- [Troubleshooting](#troubleshooting)
- [Security](#security)
- [API](#api)
- [Packaging](#packaging)
- [Examples](#examples)
- [Support](#support)
- [Links](#links)
- [License](#license)

## Features

- Accept `import.meta` or a directory string as the base path.
- Join, resolve, and relativize paths with native Node.js behavior.
- Convert paths to file URLs and file URLs to paths.
- Include TypeScript declarations and have no runtime dependencies.

## Requirements

- Node.js 26 or later.
- Native ESM support.

## Setup

Install the package:

```bash
npm install @eliware/path
```

## Usage

Pass `import.meta` from an ESM module, or pass a directory string:

```js
import path, { pathUrl, resolvePath, relativePath } from "@eliware/path";

const filePath = path(import.meta, ".env");
const fileUrl = pathUrl(import.meta, "module.mjs");
const absolutePath = resolvePath(import.meta, "data", "input.json");
const relative = relativePath(import.meta, "data", "input.json");
```

Read [release notes](RELEASE_NOTES.md) for package changes.

## Development

Read the [documentation index](docs/README.md) for the architecture and operations guides.
Read the [repository specifications](specs/README.md) for normative rules.
See the [example index](examples/README.md) for runnable examples.

## Testing

Run aggregate validation:

```bash
npm test
```

Run `npm run lint`, `npm run audit`, `npm run format:check`, `npm run typecheck`, or `npm run pack` for one check.

## Troubleshooting

Pass `import.meta` or a directory string to each path helper.
Missing or invalid bases cause an error.
String inputs always represent directories.

## Security

These helpers do not access files or networks.
Absolute segments and `..` can escape the base path.
Validate untrusted segments before file access.

## API

- `getCurrentFilename(metaOrDir)` returns a module file path or the input directory string.
- `getCurrentDirname(metaOrDir, dirnameFn?)` returns the current directory path.
- `path(metaOrDir, ...segments)` joins the base directory with path segments.
- `pathUrl(metaOrDir, ...segments)` returns a file URL string.
- `resolvePath(metaOrDir, ...segments)` returns an absolute path.
- `relativePath(metaOrDir, ...segments)` returns a path relative to the base directory.
- `fileUrlToPath(fileUrl)` converts a file URL to a path.

The default export is `path`. All helpers accept `ImportMeta` or a directory string.
The optional `dirnameFn` applies only to `ImportMeta` inputs.

## Packaging

The package uses native ESM and supports Node.js 26 or later.
It includes TypeScript declarations under `src/`.
It has no runtime dependencies and performs no initialization at import time.

## Examples

Run the example from the repository root:

```bash
node examples/example.mjs
```

See [examples/README.md](examples/README.md) for the full example index.

## Support

For help, questions, or to chat with the author and community, visit:

[![Discord](https://eliware.org/logos/discord_96.png)](https://discord.gg/M6aTR9eTwN)[![eliware.org](https://eliware.org/logos/eliware_96.png)](https://discord.gg/M6aTR9eTwN)

**[eliware.org on Discord](https://discord.gg/M6aTR9eTwN)**

## Links

- [Home Page](https://eliware.org)
- [GitHub Org](https://github.com/eliware)
- [GitHub Repo](https://github.com/eliware/path)
- [Bug Reports](https://github.com/eliware/path/issues)
- [npm](https://www.npmjs.com/package/@eliware/path)
- [Discord](https://discord.gg/M6aTR9eTwN)

## License

[MIT © Eliware](LICENSE)
