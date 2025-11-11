type TestCase = { expected: number[][] | number[] | number; input: number[][] | number[] | number };
const testCases: TestCase[] = [
  {
    expected: [[2, 7], [1, 2, 3], [4]],
    input: [[1, 2, 3], [4], [2, 7]],
  },
  {
    expected: [[2, 7], [4], [1, 2]],
    input: [[1, 2], [4], [2, 7]],
  },
  {
    expected: [[4], [1, 2]],
    input: [[4], [1, 2]],
  },
  {
    expected: [[4]],
    input: [[4]],
  },
  {
    expected: [[4], [3, 1]],
    input: [[4], [3, 1]],
  },
  {
    expected: [[1, 3, 5], [1]],
    input: [[1], [1, 3, 5]],
  },
  {
    expected: [[1, 3, 5], [1]],
    input: [
      [1, 3, 5],
      [1, 3, 5],
    ],
  },
  {
    expected: [
      [4, 7],
      [5, 6],
    ],
    input: [
      [4, 7],
      [5, 6],
    ],
  },
  {
    expected: [[1]],
    input: [[1]],
  },
  {
    expected: "input is not an array",
    input: "[[1]]",
  },
  {
    expected: "input is not an array",
    input: { ar: [1, 2, 3] },
  },
  {
    expected: "input is not an array",
    input: null,
  },

  {
    expected: "input is not an array",
    input: undefined,
  },
  {
    expected: "input is not an array",
    input: true,
  },
  {
    expected: "input is not an array",
    input: false,
  },
];

function test(testCases: TestCase[]): void {
  testCases.forEach((testCase, index) => {
    const result = sortBySum(testCase.input);
    const isSame = JSON.stringify(result) === JSON.stringify(testCase.expected);
    console.log(
      isSame ? `Testcase ${index + 1} passed` : `Testcase ${index + 1} failed`
    );
  });
}

function sum(arr: number[]): number {
  let sum = 0;
  for (let num of arr) {
    sum += num;
  }
  return sum;
}
function sortBySum(arr: number[][]) {
  if (!Array.isArray(arr)) return "input is not an array";
  const sorted = arr.sort((a, b) => {
    if (sum(a) > sum(b)) return -1;
    return 0;
  });
  return sorted;
}
