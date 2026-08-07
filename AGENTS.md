# AGENTS.md

## Project

`@eliware/path` provides dependency-free import-meta and filesystem path utilities for Node.js ESM applications.

## API and compatibility

- Preserve default `path` and named path/URL conversion exports.
- Keep support for `ImportMeta` and string directory inputs, URL conversion, relative paths, and injected helpers.
- Do not perform unexpected filesystem writes or external I/O.
- Keep declarations synchronized with runtime behavior.

## Validation

Run `npm test`, `npm run test:gaps`, `npm run lint`, `npm run typecheck`, and `npm run pack`. Maintain 100% coverage without Istanbul ignore directives.

## Changes

Update README and examples for API changes. Do not bump versions, tag, publish, or push unless explicitly requested.
