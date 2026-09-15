import path, { filename, relative } from '@eliware/path';

const here = path(import.meta);
console.log(here);
console.log(filename(import.meta, 'config.json'));
console.log(relative(import.meta, 'config.json'));
