import { getValueByPath } from "./03.qn.js";
interface TestCase {
  expected: string | number;
  input: object;
  path: string;
}
const testCases: TestCase[] = [
  { expected: 42, input: { a: { b: { c: 42 } } }, path: "a.b.c" },
  { expected: 42, input: { a: 10, d: { b: { c: 42 } } }, path: "d.b.c" },
  { expected: 22, input: { b: { c: 22 } }, path: "b.c" },
  { expected: 4, input: { e: { f: { g: 4 } } }, path: "e.f.g" },
  { expected: "f", input: { a: { b: "f", g: { c: 42 } } }, path: "a.b" },
  { expected: "k", input: { a: { c: "k" } }, path: "a.c" },
  { expected: 45, input: { a: { c: "k", b: 4 }, f: 45 }, path: "f" },
  { expected: 46, input: { a: { c: "k" }, f: 45, g: 46 }, path: "g" },
  {
    expected: "joel",
    input: { a: { c: "k" }, f: 45, g: 46, name: { m: "joel" } },
    path: "name.m",
  },
  {
    expected: "invalid path",
    input: { a: { c: "k" }, f: 45, g: 46 },
    path: "a.f",
  },
];
test(testCases);
function test(testCases: TestCase[]): void {
  testCases.forEach((testCase, index) => {
    const result = getValueByPath(testCase.input, testCase.path);
    const isSame = JSON.stringify(testCase.expected) === JSON.stringify(result);
    if (isSame) console.log(`TestCase ${index + 1} passed`);
    else console.log(`TestCase ${index + 1} failed`);
  });
}
