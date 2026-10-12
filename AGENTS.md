# AGENTS.md

## Project

Maintain `@eliware/path` as a Node.js 26 native ESM path library.

## Scope and boundaries

Keep work within path composition, path resolution, and file URL conversion.
Do not add file access, network access, or path containment behavior.

## Layout

Keep runtime modules and type declarations under `src/`.
Keep mirrored tests under `tests/`, guides under `docs/`, and runnable examples under `examples/`.
Keep normative repository rules under `specs/`.

## Development

Use the shared `@eliware/test` commands for repository checks.
Keep each source module paired with one test module at the same relative path.
Keep package declarations in sync with runtime exports.

## Validation

Use Node.js 26 or later and native ESM.
Run `npm test` for aggregate validation.
Run `npm run lint` for lint checks.
Run `npm run audit` for dependency checks.
Run `npm run format` to format files.
Run `npm run format:check` to check file format.
Run `npm run typecheck` to check declarations.
Run `npm run pack` to check package contents.

## Security

Validate user-controlled path segments before file access.
Absolute segments and `..` can escape the supplied base.

## Changes

Keep public behavior, declarations, examples, and release notes in sync.
Do not publish or deploy without the required release approval.

## Library

Document public APIs and supported use in the README.
Index guides and runnable examples in their local README files.

## npm publication

The public package is `@eliware/path`.
Run package validation before publication review.
Follow the Eliware Operations publication approval process.
