import { fileURLToPath as nodeFileURLToPath } from 'url';
import { pathUrl, fileUrlToPath } from '../index.mjs';

test('pathUrl converts import.meta and directory inputs to file URLs', () => {
    expect(pathUrl(import.meta, 'index.mjs')).toMatch(/^file:.*\/index\.mjs$/);
    expect(pathUrl(process.cwd(), 'index.mjs')).toMatch(/^file:.*\/index\.mjs$/);
    expect(pathUrl(process.cwd())).toMatch(/^file:/);
});

test('fileUrlToPath converts file URL strings and URL objects', () => {
    const url = new URL('../index.mjs', import.meta.url);
    expect(fileUrlToPath(url)).toBe(nodeFileURLToPath(url));
    expect(fileUrlToPath(url.href)).toBe(nodeFileURLToPath(url));
});
