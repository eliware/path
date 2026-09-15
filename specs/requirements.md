# Requirements

This document is normative for the `@eliware/path` public API.

- The package MUST remain native ESM and support Node.js 26 or newer.
- The package MUST preserve its default `path` export and named path and URL
  conversion exports.
- Helpers MUST accept `ImportMeta` values or directory strings as documented.
- The package MUST not perform filesystem writes or network I/O.
- Runtime behavior and TypeScript declarations MUST remain synchronized.
- Every implementation module under `src/` MUST have exactly one mirrored test
  module under `tests/`.
- In-scope implementation logic MUST retain 100% statements, branches,
  functions, and lines coverage without hiding executable code.
