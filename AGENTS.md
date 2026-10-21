# AGENTS.md

## Project

Maintain `@eliware/path` as a Node.js 26 native ESM package.

## Scope and boundaries

Follow the [repository directives](specs/directives.yaml).

## Layout

Use README.md and specs/README.md to find maintained files.

## Development

Give each source and test module one cohesive purpose.

## Validation

- Use Node.js 26 or later and native ESM for maintained JavaScript modules.
- Run `npm test` for repository checks.
- Run `npm run lint` for lint checks.
- Run `npm run audit` for dependency checks.
- Run `npm run format` to format files.
- Run `npm run format:check` to check file format.

## Security

Keep credentials, secret values, private data, and runtime state out of Git.

## Changes

Keep each document in the repository that owns its content. Update its nearest index when you add a document.

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
