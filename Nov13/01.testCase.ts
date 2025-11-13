import { teamSelection } from "./01.qn.js";

interface TestCase {
  expected: string[][] | string;
  input: string[];
  teamSize: number | boolean | string;
}

const testCases: TestCase[] = [
  {
    expected: [
      ["Joel", "John"],
      ["Joel", "Josh"],
      ["John", "Josh"],
    ],
    input: ["Joel", "John", "Josh"],
    teamSize: 2,
  },
  {
    expected: [["Ram", "John", "Don"]],
    input: ["Ram", "John", "Don"],
    teamSize: 3,
  },
  {
    expected: [
      ["Raj", "Sham", "Gokul", "Krish"],
      ["Raj", "Sham", "Gokul", "Job"],
      ["Raj", "Sham", "Krish", "Job"],
      ["Raj", "Gokul", "Krish", "Job"],
      ["Sham", "Gokul", "Krish", "Job"],
    ],
    input: ["Raj", "Sham", "Gokul", "Krish", "Job"],
    teamSize: 4,
  },
  {
    expected: [
      ["Raj", "Sham", "Gokul"],
      ["Raj", "Sham", "Krish"],
      ["Raj", "Sham", "Job"],
      ["Raj", "Gokul", "Krish"],
      ["Raj", "Gokul", "Job"],
      ["Raj", "Krish", "Job"],
      ["Sham", "Gokul", "Krish"],
      ["Sham", "Gokul", "Job"],
      ["Sham", "Krish", "Job"],
      ["Gokul", "Krish", "Job"],
    ],
    input: ["Raj", "Sham", "Gokul", "Krish", "Job"],
    teamSize: 3,
  },
  {
    expected: [
      ["Raj", "Sham"],
      ["Raj", "Gokul"],
      ["Raj", "Krish"],
      ["Raj", "Job"],
      ["Sham", "Gokul"],
      ["Sham", "Krish"],
      ["Sham", "Job"],
      ["Gokul", "Krish"],
      ["Gokul", "Job"],
      ["Krish", "Job"],
    ],
    input: ["Raj", "Sham", "Gokul", "Krish", "Job"],
    teamSize: 2,
  },
  {
    expected: "invalid inputs",
    input: ["Raj", "Sham", "Gokul", "Krish", "Job"],
    teamSize: true,
  },
  {
    expected: "invalid inputs",
    input: ["Raj", "Sham"],
    teamSize: false,
  },
  {
    expected: [["Raj", "Sham"]],
    input: ["Raj", "Sham"],
    teamSize: 2,
  },
  {
    expected: "invalid inputs",
    input: ["Raj", "Sham", "Gokul", "Krish", "Job"],
    teamSize: "9",
  },
  {
    expected: "Team size should be less than total count",
    input: ["Raj", "Sham", "Gokul", "Krish", "Job"],
    teamSize: 8,
  },
];

test(testCases);
function test(testCases: TestCase[]): void {
  testCases.forEach((testCase, index) => {
    const result = teamSelection(testCase.input, testCase.teamSize);
    const isSame = JSON.stringify(result) === JSON.stringify(testCase.expected);
    console.log(
      isSame ? `Testcase ${index + 1} passed` : `Testcase ${index + 1} failed`
    );
  });
}
