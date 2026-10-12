# Examples

Prerequisites: Node.js 26 or newer, native ESM, and an installed copy
of `@eliware/path`. Run the example from the repository root after
`npm install`:

```text
node examples/example.mjs
```

The example only composes and prints paths; it does not read or write files.
Do not replace its sample path segments with secrets or production-specific
identifiers.

## Example index

- [Basic example source](basic/example.mjs) — the directly runnable source file.
- [ESM path utilities](example.mjs) — default and named exports, URL conversion,
  absolute resolution, and relative paths.
