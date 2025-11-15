import { detectSymmetry } from "./01.qn.js";
interface Result {
  horizontal: boolean;
  vertical: boolean;
  diagonal: boolean;
}
interface TestCase {
  expected: Result;
  input: number[][];
}

const testCases: TestCase[] = [
  {
    expected: { horizontal: false, vertical: false, diagonal: true },
    input: [
      [1, 3, 2, 4],
      [1, 3, 3, 1],
      [1, 3, 2, 0],
      [4, 3, 3, 0],
    ],
  },
  {
    expected: { horizontal: false, vertical: true, diagonal: false },
    input: [
      [1, 3, 2, 4],
      [1, 3, 3, 1],
      [1, 3, 2, 0],
      [1, 3, 2, 4],
    ],
  },
  {
    expected: { horizontal: true, vertical: true, diagonal: true },
    input: [
      [1, 3, 2, 1],
      [7, 3, 3, 7],
      [2, 3, 2, 2],
      [1, 3, 2, 1],
    ],
  },
  {
    expected: { horizontal: true, vertical: true, diagonal: true },
    input: [
      [2, 3, 2],
      [9, 3, 9],
      [2, 3, 2],
    ],
  },
  {
    expected: { horizontal: false, vertical: true, diagonal: false },
    input: [
      [2, 3, 2, 9],
      [9, 3, 9, 4],
      [2, 3, 2, 9],
      [2, 3, 2, 9],
    ],
  },
  {
    expected: { horizontal: false, vertical: false, diagonal: true },
    input: [
      [2, 3, 2, 2],
      [9, 3, 3, 4],
      [2, 3, 2, 9],
      [2, 3, 2, 8],
    ],
  },
  {
    expected: { horizontal: true, vertical: false, diagonal: false },
    input: [
      [2, 3, 2, 2],
      [9, 3, 3, 9],
      [6, 3, 2, 6],
      [1, 3, 2, 1],
    ],
  },
  {
    expected: { horizontal: false, vertical: true, diagonal: false },
    input: [
      [2, 3, 2, 2, 28, 34],
      [9, 3, 3, 9, 43, 23],
      [6, 3, 2, 6, 23, 44],
      [1, 3, 2, 1, 23, 3],
      [1, 3, 2, 1, 23, 21],
      [2, 3, 2, 2, 28, 34],
    ],
  },
  {
    expected: { horizontal: false, vertical: false, diagonal: false },
    input: [
      [2, 3, 2, 2, 28, 1],
      [9, 3, 3, 9, 43, 9],
      [6, 3, 2, 6, 23, 6],
      [1, 3, 2, 1, 23, 1],
      [1, 3, 2, 1, 23, 1],
      [2, 3, 2, 2, 28, 2],
    ],
  },
  {
    expected: { horizontal: true, vertical: true, diagonal: true },
    input: [
      [2, 3, 2, 2, 28, 2],
      [9, 3, 3, 9, 43, 9],
      [6, 3, 2, 6, 23, 6],
      [1, 3, 6, 1, 23, 1],
      [1, 43, 2, 1, 23, 1],
      [2, 3, 2, 2, 28, 2],
    ],
  },
];
test(testCases);
function test(testCases: TestCase[]): void {
  testCases.forEach((testCase, index) => {
    const result = detectSymmetry(testCase.input);
    const isSame = JSON.stringify(result) === JSON.stringify(testCase.expected);
    console.log(
      isSame ? `Testcase ${index + 1} passed` : `Testcase ${index + 1} failed`
    );
  });
}