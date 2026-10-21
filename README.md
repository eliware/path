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

- Accept `import.meta` or a directory path as input.
- Join, resolve, and relativize paths with Node.js rules.
- Convert paths to file URLs and file URLs to paths.
- Create helpers that send structured records to an injected logger.

## Requirements

- Use Node.js 26 or later.
- Use native ESM.

## Setup

Install `@eliware/path`:

```bash
npm install @eliware/path
```

## Usage

Pass `import.meta` or a directory path to a helper:

```js
import path, { pathUrl, relativePath, resolvePath } from "@eliware/path";

const filePath = path(import.meta, "config", "app.json");
const fileUrl = pathUrl(import.meta, "module.mjs");
const absolutePath = resolvePath(import.meta, "data", "input.json");
const relative = relativePath(import.meta, "data", "input.json");
```

Read [release notes](RELEASE_NOTES.md) for package changes.

## Development

Read the [documentation index](docs/README.md) for user guides.
Read the [example index](examples/README.md) for runnable examples.
Read the [specifications index](specs/README.md) for repository rules.

## Testing

Run aggregate validation:

```bash
npm test
```

- Run `npm run lint` for lint checks.
- Run `npm run audit` for dependency checks.
- Run `npm run format` to format files.
- Run `npm run format:check` to check file format.
- Run `npm run typecheck` to check declarations.
- Run `npm run pack` to check package contents.

## Troubleshooting

Read the [troubleshooting guide](docs/troubleshooting.md) for input and URL errors.

## Security

Path composition does not read files or use the network.
Absolute segments and `..` can move outside the starting directory.
Check paths from user input before file access.
Logging records include operation context but omit path values.

## API

Read the [API reference](docs/api.md) for all exported functions and their behavior.

## Packaging

The package uses native ESM and supports Node.js 26 or later.
It includes TypeScript declarations and uses `@eliware/log` for structured logging.
Use `MAJOR.MINOR.PATCH` for package versions.
The npm workflow publishes a tag only when it matches `package.json.version` and validation passes.
Follow Eliware Operations for release approval.
Read the [package guide](docs/architecture.md) for package files.

## Examples

Run an example from the repository root:

```bash
node examples/example.mjs
```

Read the [example index](examples/README.md) for all examples.

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
