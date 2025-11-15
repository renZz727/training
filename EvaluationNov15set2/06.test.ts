import { wordPattern } from "./06.qn.js";
interface TestCase {
  expected: boolean;
  pattern: string;
  str: string;
}
const testCases: TestCase[] = [
  { expected: true, pattern: "abba", str: "dog cat cat dog" },
  { expected: false, pattern: "abba", str: "dog cat cat" },
  { expected: true, pattern: "abba", str: "cat dog dog cat" },
  { expected: false, pattern: "abba", str: "cat dog cat dog" },
  { expected: false, pattern: "abba", str: "cat cat" },
  { expected: true, pattern: "aabba", str: "dog dog cat cat dog" },
  { expected: true, pattern: "pqr", str: "pencil pen bottle" },
  { expected: true, pattern: "pqrp", str: "pencil pen bottle pencil" },
  { expected: false, pattern: "pqrp", str: "pencil pen" },
  { expected: true, pattern: "faabb", str: "num number number str str" },
];

test(testCases);
function test(testCases: TestCase[]): void {
  testCases.forEach((testCase, index) => {
    const result = wordPattern(testCase.pattern, testCase.str);
    const isSame = JSON.stringify(testCase.expected) === JSON.stringify(result);
    if (isSame) console.log(`Testcase ${index + 1} passed`);
    else console.log(`Testcase ${index + 1} failed`);
  });
}
