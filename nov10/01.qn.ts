type TestCase = {
  expected: number[][] | string;
  input: number[] | string | object | undefined | null | boolean;
  fn: (num: number) => boolean;
};
const testCases: TestCase[] = [
  {
    expected: [
      [2, 4],
      [1, 3],
    ],
    input: [1, 2, 3, 4],
    fn: (x) => x % 2 === 0,
  },
  {
    expected: [
      [7, 9],
      [2, 4, 5, 6],
    ],
    input: [2, 4, 5, 6, 7, 9],
    fn: (x) => x > 6,
  },
  {
    expected: [[1], [3, 5, 7]],
    input: [1, 3, 5, 7],
    fn: (x) => x < 2,
  },
  {
    expected: [
      [1, 1],
      [3, 4, 7],
    ],
    input: [1, 3, 4, 7, 1],
    fn: (x) => x < 2,
  },
  {
    expected: [
      [1, 3, 5, 7],
      [2, 4],
    ],
    input: [1, 2, 3, 4, 5, 7],
    fn: (x) => x % 2 !== 0,
  },
  {
    expected: [[], [2, 4, 6, 8, 10]],
    input: [2, 4, 6, 8, 10],
    fn: (x) => x % 2 !== 0,
  },
  {
    expected: "input is not an array",
    input: "[1, 3, 5, 7, 9]",
    fn: (x) => x > 4,
  },
  {
    expected: "input is not an array",
    input: "1, 2, 3, 5, 6",
    fn: (x) => x > 4,
  },
  {
    expected: "input is not an array",
    input: "[1, 3, 5, 7, 9]",
    fn: (x) => x > 4,
  },
  {
    expected: "input is not an array",
    input: { n: 1, m: 2 },
    fn: (x) => x > 4,
  },
  {
    expected: [[], []],
    input: [],
    fn: (x) => x > 4,
  },
  { expected: "input is not an array", input: true, fn: (x) => x > 4 },
  { expected: "input is not an array", input: false, fn: (x) => x > 4 },
  { expected: "input is not an array", input: undefined, fn: (x) => x > 4 },
  { expected: "input is not an array", input: null, fn: (x) => x > 4 },
];

test(testCases);

function test(testCases: TestCase[]): void {
  testCases.forEach((testCase: TestCase, index: number) => {
    const result = partition(testCase.input, testCase.fn);
    let flag = true;

    if (typeof result === "string") {
      if (result === testCase.expected) {
        console.log(`Testcase ${index + 1} passed`);
      } else console.log(`Testcase ${index + 1} failed`);
      return;
    } else {
      if (Array.isArray(result) && Array.isArray(testCase.expected)) {
        for (let i = 0; i < testCase.expected.length; i++) {
          for (let j = 0; j < testCase.expected[i].length; j++) {
            if (testCase.expected[i][j] !== result[i][j]) flag = false;
          }
        }
      } else {
        if (result !== testCase.expected) flag = false;
      }
      if (flag === true) console.log(`Testcase ${index + 1} passed`);
      else console.log(`Testcase ${index + 1} failed`);
    }
  });
}

function partition(
  arr: number[] | string | object | boolean | null | undefined,
  fn: (num: number) => boolean
): number[][] | string {
  if (!Array.isArray(arr)) return "input is not an array";

  const numberArr = arr as number[];

  const pass1: number[] = [];
  const pass2: number[] = [];
  numberArr.forEach((item) => {
    if (fn(item)) pass1.push(item);
    else pass2.push(item);
  });
  return [pass1, pass2];
}
