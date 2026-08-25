import { readFileSync } from 'node:fs';

const output = readFileSync(0, 'utf8');
const uncovered = output
  .split(/\r?\n/)
  .filter((line) => /^\s*(All files|[^|]+\.mjs)\s*\|/.test(line))
  .filter((line) => !line.includes('|     100 |      100 |     100 |     100 |'));

if (uncovered.length > 0) {
  process.stderr.write(`${uncovered.join('\n')}\n`);
  process.exitCode = 1;
}
