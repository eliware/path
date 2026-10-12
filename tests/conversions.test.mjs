import { pathUrl } from "../src/conversions.mjs";

test("pathUrl converts import.meta and directory inputs to file URLs", () => {
  expect(pathUrl(import.meta, "index.mjs")).toMatch(/^file:.*\/index\.mjs$/);
  expect(pathUrl(process.cwd(), "index.mjs")).toMatch(/^file:.*\/index\.mjs$/);
  expect(pathUrl(process.cwd())).toMatch(/^file:/);
});
