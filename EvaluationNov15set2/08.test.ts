import { even } from "./08.qn.js";
interface TestCase {
  expected: boolean;
  input: number;
}
const testCases = [
  { expected: false, input: 5 },
  { expected: true, input: 2 },
  { expected: false, input: 7 },
  { expected: true, input: 10 },
  { expected: true, input: 12 },
  { expected: false, input: 15 },
  { expected: false, input: 19 },
  { expected: true, input: 24 },
  { expected: false, input: 105 },
  { expected: false, input: 793 },
  { expected: true, input: 1004 },
];
test(testCases);
function test(testCases: TestCase[]): void {
  testCases.forEach((testCase, index) => {
    const result = even(testCase.input);
    const isSame = JSON.stringify(testCase.expected) === JSON.stringify(result);

    if (isSame) console.log(`Testcase ${index + 1} passed`);
    else console.log(`Testcase ${index + 1} failed`);
  });
}
