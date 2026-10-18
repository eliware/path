# AGENTS.md

## Project

Maintain `@eliware/path` as a Node.js 26 native ESM package.

## Scope and boundaries

Follow the [repository directives](specs/directives.yaml).

## Layout

Follow the repository layout in the [README](README.md).

## Development

Keep runtime behavior and package declarations in sync.

## Validation

Use these shared commands:

- Run `npm test` for repository checks.
- Run `npm run lint` for lint checks.
- Run `npm run audit` for dependency checks.
- Run `npm run format` to format files.
- Run `npm run format:check` to check file format.

## Security

Follow the safety rules in the [repository directives](specs/directives.yaml).

## Changes

Keep public behavior, examples, and release notes current.

## Library

Follow the library rules in the [repository directives](specs/directives.yaml).
Run focused tests first during development.
Run one test file with `npm test -- tests/path/to/example.test.mjs`.
Run multiple test files with `npm test -- tests/path/to/first.test.mjs tests/path/to/second.test.mjs`.
Prevent repeated full-suite runs during development.
Run the full `npm test` suite for final validation before a commit, milestone, or release.

## npm publication

The public package is `@eliware/path`.
Receive Eliware Operations approval before publication.
