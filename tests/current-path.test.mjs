import { path, resolvePath, relativePath } from "../src/current-path.mjs";
import { fileURLToPath } from "url";
import { dirname as pathDirname, join as pathJoin } from "path";

const testDir = pathDirname(fileURLToPath(import.meta.url));

test("path preserves default and named exports and handles directories and segments", () => {
  expect(path("")).toBe(".");
  expect(path(import.meta, "index.mjs")).toBe(pathJoin(testDir, "index.mjs"));
  expect(path(testDir, "index.mjs")).toBe(pathJoin(testDir, "index.mjs"));
  expect(path(testDir)).toBe(testDir);
});

test("resolvePath and relativePath resolve from the current directory", () => {
  expect(resolvePath(import.meta, "./child/file.txt")).toBe(
    fileURLToPath(new URL("./child/file.txt", import.meta.url)),
  );
  expect(relativePath(import.meta, "./child/file.txt")).toBe(pathJoin("child", "file.txt"));
  expect(resolvePath(testDir, "..")).toBe(pathDirname(testDir));
  expect(relativePath(testDir, "..")).toBe("..");
});
