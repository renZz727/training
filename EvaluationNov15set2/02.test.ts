import { checkSameWeek } from "./02.qn.js";
interface TestCase {
  expected: boolean;
  date1: string;
  date2: string;
}
const testCases: TestCase[] = [
  { expected: true, date1: "2024-01-02", date2: "2024-01-01" },
  { expected: false, date1: "2025-01-02", date2: "2025-01-05" },
  { expected: true, date1: "2025-01-02", date2: "2025-01-05" },
  { expected: true, date1: "2025-02-02", date2: "2025-02-04" },
  { expected: true, date1: "2025-10-02", date2: "2025-10-04" },
  { expected: true, date1: "2024-10-13", date2: "2025-10-13" },
  { expected: false, date1: "2024-10-13", date2: "2025-10-21" },
  { expected: true, date1: "2020-10-13", date2: "2025-10-11" },
  { expected: false, date1: "2020-10-13", date2: "2020-11-13" },
  { expected: false, date1: "2020-10-13", date2: "2003-11-13" },
];

test(testCases);
function test(testCases: TestCase[]): void {
  testCases.forEach((testCase, index) => {
    const result = checkSameWeek(testCase.date1, testCase.date2);
    const isSame = JSON.stringify(testCase.expected) === JSON.stringify(result);

    if (isSame) console.log(`Testcase ${index + 1} passed`);
    else console.log(`Testcase ${index + 1} failed`);
  });
}
