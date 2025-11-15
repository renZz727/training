import { sortByScoreRank } from "./03.qn.js";
interface TestCase {
  expected: { score: number; rank: number }[];
  input: number[];
}
const testCases: TestCase[] = [
  {
    expected: [
      { score: 100, rank: 1 },
      { score: 100, rank: 1 },
      { score: 90, rank: 2 },
      { score: 80, rank: 3 },
    ],
    input: [100, 100, 90, 80],
  },
  {
    expected: [
      { score: 60, rank: 1 },
      { score: 40, rank: 2 },
      { score: 20, rank: 3 },
      { score: 20, rank: 3 },
      { score: 10, rank: 4 },
    ],
    input: [10, 20, 20, 40, 60],
  },
  {
    expected: [
      { score: 100, rank: 1 },
      { score: 60, rank: 2 },
      { score: 40, rank: 3 },
      { score: 20, rank: 4 },
      { score: 20, rank: 4 },
    ],
    input: [100, 20, 20, 40, 60],
  },
  {
    expected: [
      { score: 110, rank: 1 },
      { score: 100, rank: 2 },
      { score: 90, rank: 3 },
      { score: 80, rank: 4 },
      { score: 70, rank: 5 },
    ],
    input: [100, 90, 80, 70, 110],
  },
  {
    expected: [
      { score: 29, rank: 1 },
      { score: 8, rank: 2 },
      { score: 5, rank: 3 },
      { score: 3, rank: 4 },
      { score: 1, rank: 5 },
    ],
    input: [1, 3, 5, 8, 29],
  },
  {
    expected: [
      { score: 30, rank: 1 },
      { score: 20, rank: 2 },
      { score: 20, rank: 2 },
      { score: -10, rank: 3 },
    ],
    input: [-10, 20, 20, 30],
  },
  {
    expected: [
      { score: 30, rank: 1 },
      { score: -10, rank: 2 },
      { score: -20, rank: 3 },
      { score: -20, rank: 3 },
    ],
    input: [-10, -20, -20, 30],
  },
  {
    expected: [
      { score: 30, rank: 1 },
      { score: 20, rank: 2 },
      { score: -10, rank: 3 },
      { score: -20, rank: 4 },
    ],
    input: [-10, 20, -20, 30],
  },
  {
    expected: [
      { score: 43, rank: 1 },
      { score: 20, rank: 2 },
      { score: 20, rank: 2 },
      { score: 10, rank: 3 },
    ],
    input: [10, 20, 20, 43],
  },
  {
    expected: [
      { score: 2320, rank: 1 },
      { score: 1910, rank: 2 },
      { score: 320, rank: 3 },
      { score: 130, rank: 4 },
    ],
    input: [1910, 2320, 320, 130],
  },
];

test(testCases);
function test(testCases: TestCase[]) {
  testCases.forEach((testCase, index) => {
    const result = sortByScoreRank(testCase.input);
    const isSame = JSON.stringify(result) === JSON.stringify(testCase.expected);
    console.log(
      isSame ? `Testcase ${index + 1} passed` : `Testcase ${index + 1} failed`
    );
  });
}
