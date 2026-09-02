import defaultPath, * as api from '../index.mjs';

test('root entrypoint exposes the complete public API', () => {
    expect(defaultPath).toBe(api.path);
    expect(Object.keys(api).sort()).toEqual([
        'default',
        'fileUrlToPath',
        'getCurrentDirname',
        'getCurrentFilename',
        'path',
        'pathUrl',
        'relativePath',
        'resolvePath',
    ]);
});
