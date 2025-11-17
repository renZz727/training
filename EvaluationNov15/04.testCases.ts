import { frequencySort } from "./04.qn.js";
interface Testcase {
  expected: number[];
  input: number[];
}
const testCases: Testcase[] = [
  { expected: [4, 4, 5, 5, 3, 6], input: [4, 5, 6, 5, 4, 3] },
  { expected: [4, 4, 6, 6, 3, 5], input: [4, 6, 6, 5, 4, 3] },
  { expected: [5, 5, 6, 6, 3, 4], input: [5, 6, 6, 5, 4, 3] },
  { expected: [6, 6, 5], input: [5, 6, 6] },
  { expected: [6, 6, 6, 3, 4, 5], input: [5, 6, 6, 6, 4, 3] },
  { expected: [1, 1, 3, 4, 5, 6], input: [1, 1, 6, 5, 4, 3] },
  { expected: [1, 3, 4, 5, 6, 7, 9], input: [1, 7, 9, 6, 5, 4, 3] },
  { expected: [1, 1, 2, 2, 3, 3], input: [1, 1, 2, 2, 3, 3] },
  {
    expected: [4, 4, 4, 4, 1, 1, 2, 2, 3, 3],
    input: [1, 1, 2, 2, 3, 3, 4, 4, 4, 4],
  },
  { expected: [1, 3, 4, 5, 6], input: [1, 3, 4, 5, 6] },
  { expected: [1, 2, 3, 7], input: [2, 3, 7, 1] }, // all unique
];
test(testCases);
function test(testCases: Testcase[]): void {
  testCases.forEach((testCase, index) => {
    const result = frequencySort(testCase.input);
    const isSame = JSON.stringify(testCase.expected) === JSON.stringify(result);
    if (isSame) console.log(`TestCase ${index + 1} passed`);
    else console.log(`TestCase ${index + 1} failed`);
  });
}
