import path, { relativePath } from "@eliware/path";

const here = path(import.meta);
console.log(here);
console.log(relativePath(import.meta, "config.json"));
