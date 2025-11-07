const testCases = [
  { expected: 11, input: [[2], [3, 4], [6, 5, 7], [4, 1, 8, 3]] },
  { expected: 8, input: [[4], [1, 3], [2, 5, 3], [4, 1, 3, 8]] },
  { expected: -7, input: [[1], [-1, -2], [0, -3, 6], [2, 0, 1, -3]] },
  { expected: 7, input: [[1], [2, 3], [4, 5, 6]] },
  { expected: 3, input: [[1], [2, 3]] },
  {
    expected: "not a triangle matrix",
    input: [
      [1, 3, 5, 9],
      [1, 3],
    ],
  },
  { expected: "not a triangle matrix", input: [1, 1, 5, 5] },
  { expected: "not a triangle matrix", input: [[2], [2, 3, 5]] },
  { expected: 2, input: [2] },
  { expected: 0, input: [] },
  { expected: "not an array", input: { num: 21 } },
  { expected: "not an array", input: {} },
  { expected: 21, input: [21] },
  { expected: "not an array", input: undefined },
  { expected: "not an array", input: null },
];
test(testCases);
function test(testCases) {
  testCases.forEach((testCase, index) => {
    const result = minPathSum(testCase.input);

    if (testCase.expected === result)
      console.log(`Testcase ${index + 1} passed`);
    else console.log(`Testcase ${index + 1} failed`);
  });
}

function minPathSum(arr) {
  if (!Array.isArray(arr) || arr === null) return "not an array";
  let k = 1;
  if (arr.length === 1) return arr[0];
  else {
    for (let i = 0; i < arr.length; i++) {
      if (k !== arr[i].length) return "not a triangle matrix";
      k++;
    }
  }
  let minPath = 0;
  for (let i = 0; i < arr.length; i++) {
    let min = Number.MAX_VALUE;
    for (let j = 0; j < arr[i].length; j++) {
      if (min > arr[i][j]) {
        min = arr[i][j];
      }
    }
    minPath += min;
  }
  return minPath;
}
