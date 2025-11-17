import { SeatingArrangementWithRoundTable } from "./02.qn.js";
interface Testcase {
  expected: string[][] | string | number[][];
  input: string[] | number[] | null | undefined;
}
const testCases: Testcase[] = [
  {
    expected: [["A", "B"]],
    input: ["A", "B"],
  },
  {
    expected: [
      ["A", "B", "C"],
      ["A", "C", "B"],
    ],
    input: ["A", "B", "C"],
  },
  {
    expected: [
      ["A", "B", "C", "D"],
      ["A", "B", "D", "C"],
      ["A", "C", "B", "D"],
      ["A", "C", "D", "B"],
      ["A", "D", "B", "C"],
      ["A", "D", "C", "B"],
    ],
    input: ["A", "B", "C", "D"],
  },
  {
    expected: [["A"]],
    input: ["A"],
  },
  {
    expected: [
      ["a1", "a2", "a3"],
      ["a1", "a3", "a2"],
    ],
    input: ["a1", "a2", "a3"],
  },
  {
    expected: [
      ["red", "green", "blue"],
      ["red", "blue", "green"],
    ],
    input: ["red", "green", "blue"],
  },
  {
    expected: [
      ["chair 1", "chair 2", "chair 3"],
      ["chair 1", "chair 3", "chair 2"],
    ],
    input: ["chair 1", "chair 2", "chair 3"],
  },
  {
    expected: [
      [1, 2, 3],
      [1, 3, 2],
    ],
    input: [1, 2, 3],
  },
  {
    expected: [[]],
    input: [],
  },
  {
    expected: "invalid input",
    input: null,
  },
];
test(testCases);

function test(testCases: Testcase[]): void {
  testCases.forEach((testCase, index) => {
    const result = SeatingArrangementWithRoundTable(testCase.input);
    const isSame = JSON.stringify(testCase.expected) === JSON.stringify(result);
    if (isSame) console.log(`Testcase ${index + 1} passed`);
    else console.log(`Testcase ${index + 1} failed`);
  });
}
