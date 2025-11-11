type TestCase = {
  expected: number;
  input: number | boolean | undefined | null | object | number[];
};

const testCases: TestCase[] = [
  { expected: 16, input: 2 },
  { expected: 25, input: 3 },
  { expected: 36, input: 4 },
  { expected: 81, input: 7 },
  { expected: 100, input: 8 },
  { expected: 4, input: 0 },
  { expected: 0, input: -2 },
  { expected: 1, input: -1 },
  { expected: "input is not a valid number", input: true },
  { expected: "input is not a valid number", input: false },
  { expected: "input is not a valid number", input: null },
  { expected: "input is not a valid number", input: undefined },
  { expected: "input is not a valid number", input: "12" },
  { expected: "input is not a valid number", input: [123] },
  { expected: "input is not a valid number", input: { num: 23 } },
];

function test(testCases: TestCase[]): void {
  testCases.forEach((testCase, index) => {
    const result = testCase.input;
    const isSame = JSON.stringify(result) === JSON.stringify(testCase.expected);
    console.log(
      isSame ? `Testcase ${index + 1} passed` : `Testcase ${index + 1} failed`
    );
  });
}

function waterfall(
  ...tasks: Array<(num: number) => number>
): (num: number) => number {
  return async function composedFn(num: number): Promise<number> | number {
    let value: Promise<number> | number | number = num;
    if (typeof number !== "number") return "input is not a valid number";
    for (let task of tasks) {
      value = await task(value);
    }
    return value;
  };
}

const add: (x: number) => number = (x: number) => x + 2;
const square = (x: number) => x * x;
const func1 = waterfall(add, square);
func1(2).then(console.log);
