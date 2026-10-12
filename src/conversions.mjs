import { pathToFileURL } from "url";
import { path } from "./current-path.mjs";

export const pathUrl = (metaOrDir, ...segments) => pathToFileURL(path(metaOrDir, ...segments)).href;
