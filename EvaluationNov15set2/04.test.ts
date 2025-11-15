import { flattenObjectKeys } from "./04.qn.js";

interface TestCase {
  expected: Record<string, unknown>;
  input: Record<string, unknown>;
}

const testCases: TestCase[] = [
  { expected: { "a.b.c": 1, d: 2 }, input: { a: { b: { c: 1 } }, d: 2 } },
  { expected: { "a.b": 4, d: 2 }, input: { a: { b: 4 }, d: 2 } },
  { expected: { "b.c": 1 }, input: { b: { c: 1 } } },
  {
    expected: { "a.b": 3, "a.d.c": 10, d: 2 },
    input: { a: { b: 3, d: { c: 10 } }, d: 2 },
  },
  { expected: { "k.l": 68, d: 2 }, input: { k: { l: 68 }, d: 2 } },
  { expected: { a: 78, d: 2 }, input: { a: 78, d: 2 } },
  {
    expected: { "k.l": "age", d: "name" },
    input: { k: { l: "age" }, d: "name" },
  },
  {
    expected: { a: 78, k: 8, f: "temp", d: 2 },
    input: { a: 78, k: 8, f: "temp", d: 2 },
  },
  {
    expected: {
      a: 1,
      "b.c": 3,
      "b.d": 4,
      "b.e": 5,
      "b.f.g": 9,
      "b.f.h": 10,
      "b.f.name.n1": "John",
    },
    input: {
      a: 1,
      b: { c: 3, d: 4, e: 5, f: { g: 9, h: 10, name: { n1: "John" } } },
    },
  },
  {
    expected: {},
    input: {},
  },
];

test(testCases);
function test(testCases: TestCase[]): void {
  testCases.forEach((testCase, index) => {
    const result = flattenObjectKeys(testCase.input);
    const isSame = JSON.stringify(testCase.expected) === JSON.stringify(result);

    if (isSame) console.log(`Testcase ${index + 1} passed`);
    else console.log(`Testcase ${index + 1} failed`);
  });
}
