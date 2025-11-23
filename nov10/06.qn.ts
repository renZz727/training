type test = {
  expected: number | boolean;
  input: number | string | number[] | undefined | null | {};
};
const testCases: test[] = [
  { expected: 5, input: 100 },
  { expected: 5, input: 250 },
  { expected: 23, input: 460 },
  { expected: 283, input: 566 },
  { expected: 89, input: 712 },
  { expected: 23, input: 920 },
  { expected: 2, input: 1024 },
  { expected: 29, input: 13195 },
  { expected: false, input: "21" },
  { expected: false, input: " " },
  { expected: false, input: { num: 21 } },
  { expected: false, input: {} },
  { expected: false, input: [21] },
  { expected: false, input: undefined },
  { expected: false, input: null },
];

test(testCases);
function test(testCases): void {
  testCases.forEach((testCase: test, index: number) => {
    const result = findPrimes(testCase.input, testCase.input);

    console.log(testCase.expected, " ", result);
    if (testCase.expected === result)
      console.log(`Testcase ${index + 1} passed`);
    else console.log(`Testcase ${index + 1} failed`);
  });
}

function isPrime(num: number): boolean {
  if (num < 2) return false;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return true;
}

function findPrimes(num: number): number | boolean {
  if (typeof num !== "number") return false;
  for (let i = num - 1; i >= 0; i--) {
    if (num % i === 0 && isPrime(i)) {
      return i;
    }
  }
}
