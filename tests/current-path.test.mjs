import { jest } from '@jest/globals';
import path, { path as namedPath, getCurrentFilename, getCurrentDirname, resolvePath, relativePath } from '../index.mjs';
import { fileURLToPath } from 'url';
import { dirname as pathDirname, join as pathJoin } from 'path';

const __dirname = pathDirname(fileURLToPath(import.meta.url));

test('getCurrentFilename resolves import.meta and strings and rejects missing input', () => {
    expect(getCurrentFilename(import.meta).replace(/\\/g, '/').endsWith('/current-path.test.mjs')).toBe(true);
    expect(getCurrentFilename(__dirname)).toBe(__dirname);
    expect(() => getCurrentFilename()).toThrow('Cannot determine current filename');
});

test('getCurrentDirname supports import.meta, strings, and injected dirname functions', () => {
    expect(getCurrentDirname(import.meta)).toBe(pathDirname(getCurrentFilename(import.meta)));
    expect(getCurrentDirname(__dirname)).toBe(__dirname);
    const stubFn = jest.fn().mockReturnValue('/fake/dir');
    expect(getCurrentDirname(import.meta, stubFn)).toBe('/fake/dir');
    expect(stubFn).toHaveBeenCalledWith(getCurrentFilename(import.meta));
});

test('path preserves default and named exports and handles directories and segments', () => {
    expect(path('')).toBe('.');
    expect(path(import.meta, 'index.mjs')).toBe(pathJoin(getCurrentDirname(import.meta), 'index.mjs'));
    expect(namedPath(import.meta, 'index.mjs')).toBe(pathJoin(getCurrentDirname(import.meta), 'index.mjs'));
    expect(path(__dirname, 'index.mjs')).toBe(pathJoin(__dirname, 'index.mjs'));
    expect(namedPath(__dirname, 'index.mjs')).toBe(pathJoin(__dirname, 'index.mjs'));
    expect(path(__dirname)).toBe(__dirname);
    expect(namedPath(__dirname)).toBe(__dirname);
});

test('resolvePath and relativePath resolve from the current directory', () => {
    expect(resolvePath(import.meta, './child/file.txt')).toBe(fileURLToPath(new URL('./child/file.txt', import.meta.url)));
    expect(relativePath(import.meta, './child/file.txt')).toBe(pathJoin('child', 'file.txt'));
});
