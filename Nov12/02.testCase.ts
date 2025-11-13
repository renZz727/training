import { findAvailableSeats } from "./02.qn.js";
interface TestCase {
  expected: number[][];
  seatGrid: number[][];
  groupSize: number;
}
const testCases : TestCase[]= [
  {
    expected: [
      [0, 0],
      [2, 0],
    ],
    seatGrid: [
      [0, 0, 1],
      [1, 0, 1],
      [0, 0, 0],
    ],
    groupSize: 2,
  },
  {
    expected: [
      [0, 0],
      [2, 0],
      [2, 2],
    ],
    seatGrid: [
      [0, 0, 1, 1],
      [1, 0, 1, 1],
      [0, 0, 0, 0],
    ],
    groupSize: 2,
  },
  {
    expected: [
      [2, 0],
      [3, 1],
    ],
    seatGrid: [
      [0, 0, 1, 1],
      [1, 0, 0, 1],
      [0, 0, 0, 0],
      [1, 0, 0, 0],
    ],
    groupSize: 3,
  },
  {
    expected: [[3, 1]],
    seatGrid: [
      [0, 0, 1, 1],
      [1, 0, 1, 1],
      [0, 0, 1, 0],
      [1, 0, 0, 0],
    ],
    groupSize: 3,
  },
  {
    expected: [],
    seatGrid: [
      [0, 0, 1, 1],
      [1, 0, 1, 1],
      [0, 0, 1, 0],
      [1, 0, 0, 0],
    ],
    groupSize: 4,
  },
  {
    expected: [
      [0, 0],
      [2, 0],
      [2, 3],
      [3, 1],
      [3, 3],
    ],
    seatGrid: [
      [0, 0, 1, 1, 1, 1],
      [1, 0, 1, 1, 0, 1],
      [0, 0, 1, 0, 0, 1],
      [1, 0, 0, 0, 0, 1],
    ],
    groupSize: 2,
  },
  {
    expected: [
      [0, 3],
      [1, 4],
    ],
    seatGrid: [
      [0, 0, 1, 0, 0, 0],
      [0, 0, 1, 1, 0, 0],
      [0, 0, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 1],
    ],
    groupSize: 5,
  },
  {
    expected: [
      [0, 0],
      [0, 3],
      [0, 5],
      [1, 4],
      [2, 0],
      [2, 2],
      [3, 1],
      [3, 3],
      [4, 0],
      [4, 3],
      [4, 5],
      [5, 4],
      [6, 0],
      [6, 2],
      [7, 1],
      [7, 3],
    ],
    seatGrid: [
      [0, 0, 1, 0, 0, 0],
      [0, 0, 1, 1, 0, 0],
      [0, 0, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 1],
      [0, 0, 1, 0, 0, 0],
      [0, 0, 1, 1, 0, 0],
      [0, 0, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 1],
    ],
    groupSize: 2,
  },
  {
    expected: [
      [0, 3],
      [1, 4],
      [4, 3],
      [5, 4],
    ],
    seatGrid: [
      [0, 0, 1, 0, 0, 0],
      [0, 0, 1, 1, 0, 0],
      [0, 0, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 1],
      [0, 0, 1, 0, 0, 0],
      [0, 0, 1, 1, 0, 0],
      [0, 0, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 1],
    ],
    groupSize: 5,
  },
  {
    expected: [
      [1, 4],
      [5, 4],
    ],
    seatGrid: [
      [0, 0, 1, 0, 0, 0],
      [0, 0, 1, 1, 0, 0],
      [0, 0, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 1],
      [0, 0, 1, 0, 0, 0],
      [0, 0, 1, 1, 0, 0],
      [0, 0, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 1],
    ],
    groupSize: 7,
  },
];

test(testCases);
function test(testCases : TestCase[]) {
  testCases.forEach((testCase, index) => {
    const result = findAvailableSeats(testCase.seatGrid, testCase.groupSize);
    const isSame = JSON.stringify(result) === JSON.stringify(testCase.expected);
    console.log(
      isSame ? `Testcase ${index + 1} passed` : `Testcase ${index + 1} failed`
    );
  });
}
