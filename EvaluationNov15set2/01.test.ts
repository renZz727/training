import { findLongestChain } from "./01.qn.js";
interface TestCase {
  expected: Record<string, unknown>;
  input: number[];
}
const testCases: TestCase[] = [
  {
    expected: { list: [1, 2, 3, 4, 6], length: 5 },
    input: [5, 1, 2, 3, 0, 4, 6],
  },
  {
    expected: { list: [3, 4, 6], length: 3 },
    input: [3, 0, 4, 6],
  },
  {
    expected: { list: [3], length: 1 },
    input: [3, 0],
  },
  {
    expected: { list: [1, 3, 5, 8, 20], length: 5 },
    input: [1, 3, 5, 8, 20],
  },
  {
    expected: { list: [10, 30], length: 2 },
    input: [10, 30, 10, 1, 7],
  },
  {
    expected: { list: [11, 13], length: 2 },
    input: [101, 100, 11, 13],
  },
  {
    expected: { list: [-1, 19], length: 2 },
    input: [-1, -2, 19, 16, -2],
  },
  {
    expected: { list: [-7, 8, 21], length: 3 },
    input: [-7, 8, 21],
  },
  {
    expected: { list: [-7], length: 1 },
    input: [-7, -21],
  },
  {
    expected: { list: [-7], length: 1 },
    input: [-7, -7],
  },
];

test(testCases);
function test(testCases: TestCase[]): void {
  testCases.forEach((testCase, index) => {
    const result = findLongestChain(testCase.input);
    const isSame = JSON.stringify(testCase.expected) === JSON.stringify(result);
    if (isSame) console.log(`Testcase ${index + 1} passed`);
    else console.log(`Testcase ${index + 1} failed`);
  });
}
