import { primeNumber } from "./01.qn.js";

interface TestCase {
  expected: Number;
  input: Number;
}
const testCases: TestCase[] = [
  {
    expected: 6,
    input: 13,
  },
];
test(testCases);
function test(testCases: TestCase[]): void {
  testCases.forEach((testCase, index) => {
    const result = primeNumber(testCase.input);
    const isSame = JSON.stringify(testCase.expected) === JSON.stringify(result);
    if (isSame) console.log(`TestCase ${index + 1} passed`);
    else console.log(`TestCase ${index + 1} failed`);
  });
}
