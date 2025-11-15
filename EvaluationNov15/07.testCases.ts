import { validEmails } from "./07.qn.js";
interface TestCase {
  input: string;
  expected: boolean;
}
const testCases: TestCase[] = [
  { expected: true, input: "ram@gmail.com" },
  { expected: true, input: "ramManohar07@gmail.com" },
  { expected: false, input: "ramgmail.com" },
  { expected: false, input: "@gmail.com" },
  { expected: false, input: "ram@" },
  { expected: true, input: "Ram032@gmail.com" },
  { expected: true, input: "ram.032@gmail.com" },
  { expected: true, input: "r.a_m.032@gmail.com" },
  { expected: false, input: ".r.a_m.032@gmail.com" },
  { expected: false, input: "r.a_m.032@gmail.com." },
  { expected: false, input: "r.a_m..032@gmail.com" },
  { expected: false, input: "r.a_m.032@gmailcom" },
  { expected: false, input: "r.a_m.032@gmail.c" },
  { expected: false, input: "r.a_m.03 2@gmail.com" },
  { expected: false, input: "r.a_m .032@g mail.com" },
];
test(testCases);
function test(testCases: TestCase[]) {
  testCases.forEach((testCase, index) => {
    const result = validEmails(testCase.input);
    const isSame = JSON.stringify(testCase.expected) === JSON.stringify(result);
    if (isSame) console.log(`TestCase ${index + 1} passed`);
    else console.log(`TestCase ${index + 1} failed`);
  });
}
