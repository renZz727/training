import { analyzeHeatMap } from "./02.qn.js";

interface TestCase {
  expected: {
    maxTemp: number;
    minTemp: number;
    averageTemp: number;
    hottestPoint: number[];
    coldestPoint: number[];
  };
  input: number[][];
}

const testCases: TestCase[] = [
  {
    expected: {
      maxTemp: 40,
      minTemp: 28,
      averageTemp: 33.7,
      hottestPoint: [1, 1],
      coldestPoint: [1, 0],
    },
    input: [
      [30, 32, 35],
      [28, 40, 33],
      [31, 36, 38],
    ],
  },
  {
    expected: {
      maxTemp: 41,
      minTemp: 0,
      averageTemp: 21,
      hottestPoint: [1, 1],
      coldestPoint: [0, 0],
    },
    input: [
      [0, 32, 3],
      [25, 41, 13],
      [31, 36, 8],
    ],
  },
  {
    expected: {
      maxTemp: 41,
      minTemp: 0,
      averageTemp: 24.7,
      hottestPoint: [1, 1],
      coldestPoint: [0, 0],
    },
    input: [
      [0, 32],
      [25, 41],
      [31, 36, 8],
    ],
  },
  {
    expected: {
      maxTemp: 92,
      minTemp: -3,
      averageTemp: 17.8,
      hottestPoint: [1, 3],
      coldestPoint: [1, 0],
    },
    input: [
      [3, 4, 5, 4],
      [-3, 4, 8, 92, 21],
      [31, 36, 8],
    ],
  },
  {
    expected: {
      maxTemp: 92,
      minTemp: 0,
      averageTemp: 30,
      hottestPoint: [3, 0],
      coldestPoint: [0, 0],
    },
    input: [
      [0, 32],
      [25, 41],
      [31, 36, 8],
      [92, 22, 42, 1],
    ],
  },
  {
    expected: {
      maxTemp: 41,
      minTemp: 10,
      averageTemp: 27,
      hottestPoint: [1, 1],
      coldestPoint: [0, 0],
    },
    input: [
      [10, 32],
      [25, 41],
    ],
  },
  {
    expected: {
      maxTemp: 23,
      minTemp: 16,
      averageTemp: 19.5,
      hottestPoint: [0, 1],
      coldestPoint: [0, 0],
    },
    input: [[16, 23]],
  },
  {
    expected: {
      maxTemp: 54,
      minTemp: 8,
      averageTemp: 28,
      hottestPoint: [3, 0],
      coldestPoint: [0, 0],
    },
    input: [[8, 32], [25], [21], [54, 21], [46, 21, 24]],
  },
  {
    expected: {
      maxTemp: 46,
      minTemp: 21,
      averageTemp: 30.3,
      hottestPoint: [0, 0],
      coldestPoint: [0, 1],
    },
    input: [[46, 21, 24]],
  },
  {
    expected: {
      maxTemp: 2,
      minTemp: 2,
      averageTemp: 2,
      hottestPoint: [0, 0],
      coldestPoint: [0, 0],
    },
    input: [[2]],
  },
];

test(testCases);
function test(testCases: TestCase[]): void {
  testCases.forEach((testCase, index) => {
    const result = analyzeHeatMap(testCase.input);
    const isSame = JSON.stringify(result) === JSON.stringify(testCase.expected);
    console.log(
      isSame ? `Testcase ${index + 1} passed` : `Testcase ${index + 1} failed`
    );
  });
}
