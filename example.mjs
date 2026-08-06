// Example for ESM (module JS) usage
// Import the path utility from the installed package
import path, { fileUrlToPath, pathUrl, relativePath, resolvePath } from '@eliware/path';
// or import { path } from '@eliware/path'; // identical

// for ESM, we need to pass import.meta
const envFile = path(import.meta, ".env");
console.log(envFile);

// Using pathUrl to get a file URL href for dynamic import
const envFileUrl = pathUrl(import.meta, ".env");
console.log(envFileUrl);
// Example: dynamic import
// import(envFileUrl).then(mod => console.log(mod));

console.log('resolved:', resolvePath(import.meta, 'config', 'app.json'));
console.log('relative:', relativePath(import.meta, 'config', 'app.json'));
console.log('round trip:', fileUrlToPath(pathUrl(import.meta, '.env')));
