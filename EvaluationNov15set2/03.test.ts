import { formatTimeAgo } from "./03.qn.js";
interface TestCase {
  expected: string;
  input: string;
}
const testCases: TestCase[] = [
  { expected: "5 days ago", input: "2025-11-15T10:49:30.775Z" },
  { expected: "6 days ago", input: "2025-11-14T10:49:30.775Z" },
  { expected: "4 days ago", input: "2025-11-16T10:49:30.775Z" },
  { expected: "3 days ago", input: "2025-11-17T10:49:30.775Z" },
  { expected: "2 days ago", input: "2025-11-18T10:49:30.775Z" },
  { expected: "Yesterday", input: "2025-11-19T10:49:30.775Z" },
  { expected: "11 minutes ago", input: "2025-11-20T10:49:30.775Z" },
  { expected: "10 days ago", input: "2025-11-10T10:49:30.775Z" },
  { expected: "9 days ago", input: "2025-11-11T10:49:30.775Z" },
  { expected: "19 days ago", input: "2025-11-01T10:49:30.775Z" },
];

test(testCases);
function test(testCases: TestCase[]): void {
  testCases.forEach((testCase, index) => {
    const result = formatTimeAgo(testCase.input);
    const isSame = JSON.stringify(testCase.expected) === JSON.stringify(result);

    if (isSame) console.log(`Testcase ${index + 1} passed`);
    else console.log(`Testcase ${index + 1} failed`);
  });
}
