# Architecture

The public package entrypoint is [`src/index.mjs`](../src/index.mjs), which
re-exports the stable API. Implementation responsibilities are separated into
[`src/current-path.mjs`](../src/current-path.mjs) for directory and path
resolution and [`src/conversions.mjs`](../src/conversions.mjs) for URL/path
conversion.

Tests mirror the source modules exactly:

- [`tests/index.test.mjs`](../tests/index.test.mjs)
- [`tests/current-path.test.mjs`](../tests/current-path.test.mjs)
- [`tests/conversions.test.mjs`](../tests/conversions.test.mjs)
