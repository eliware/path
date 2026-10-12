import { fileURLToPath as nodeFileURLToPath } from "url";
import { fileUrlToPath } from "../src/file-url-to-path.mjs";

test("fileUrlToPath converts file URL strings and URL objects", () => {
  const url = new URL("../index.mjs", import.meta.url);
  expect(fileUrlToPath(url)).toBe(nodeFileURLToPath(url));
  expect(fileUrlToPath(url.href)).toBe(nodeFileURLToPath(url));
});
