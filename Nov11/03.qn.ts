type TestCase<Tinput, Texpected> = {
  input: Tinput;
  expected: Texpected;
};

const testCases1: TestCase<boolean | number | string | null| undefined, string | number>[] = [
  { expected: 30, input: 5 },
  { expected: 24, input: 3 },
  { expected: 36, input: 7 },
  { expected: 42, input: 9 },
  { expected: 15, input: 0 },
  { expected: "input is not a number", input: false },
  { expected: "input is not a number", input: true },
  { expected: "input is not a number", input: null },
  { expected: "input is not a number", input: undefined },
];

const testCases2: TestCase<boolean | number | string | null| undefined, string | number>[] = [
  { expected: 8, input: 5 },
  { expected: 4, input: 3 },
  { expected: 12, input: 7 },
  { expected: 16, input: 9 },
  { expected: -2, input: 0 },
];

function testing1<TInput extends number, TExpected>(testCases1: TestCase<boolean | number | string | null| undefined, string | number>[]): void {
  testCases1.forEach((testCase, index) => {
    const result = test1(testCase.input);
    const isSame = JSON.stringify(result) === JSON.stringify(testCase.expected);
    console.log(
      isSame ? `Testset1 ${index + 1} passed` : `Testset1 ${index + 1} failed`
    );
  });
}

function testing2<TInput extends number, TExpected>(testCases2: TestCase<TInput, TExpected>[]): void {
  testCases2.forEach((testCase, index) => {
    const result = test2(testCase.input);
    const isSame = JSON.stringify(result) === JSON.stringify(testCase.expected);
    console.log(
      isSame ? `Testset2 ${index + 1} passed` : `Testset2 ${index + 1} failed`
    );
  });
}

function pipe(...fns: Array<(num: number) => number>): (num: number) => number {
  return function composedFn(num: number): number {
    let value = num;
    fns.forEach((fun: (num: number) => number) => {
      if (typeof num !== "number") return false;
      value = fun(value);
    });
    return value;
  };
}
const test1: (x: number) => number = pipe(
  (x: number) => x + 5,
  (x: number) => x * 3
);
const test2: (x: number) => number = pipe(
  (x: number) => x - 1,
  (x: number) => x * 2
);
testing1(testCases1);
testing2(testCases2);
