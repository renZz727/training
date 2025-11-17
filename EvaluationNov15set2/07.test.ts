import { romanToInteger } from "./07.qn.js";

interface TestCase {
  expected: number;
  input: string;
}
const testCases: TestCase[] = [
  { expected: 1994, input: "MCMXCIV" },
  { expected: 1, input: "I" },
  { expected: 4, input: "IV" },
  { expected: 9, input: "IX" },
  { expected: 10, input: "X" },
  { expected: 40, input: "XL" },
  { expected: 90, input: "XC" },
  { expected: 99, input: "XCIX" },
  { expected: 101, input: "CI" },
  { expected: 194, input: "CXCIV" },
  { expected: 499, input: "CDXCIX" },
  { expected: 999, input: "CMXCIX" },
  { expected: 2903, input: "MMCMIII" },
];

test(testCases);
function test(testCases: TestCase[]): void {
  testCases.forEach((testCase, index) => {
    const result = romanToInteger(testCase.input);
    const isSame = JSON.stringify(testCase.expected) === JSON.stringify(result);
    if (isSame) console.log(`Testcase ${index + 1} passed`);
    else console.log(`Testcase ${index + 1} failed`);
  });
}
