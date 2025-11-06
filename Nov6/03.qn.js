const testCases = [
  {
    expected: [
      [1, 2],
      [4, 3],
    ],
    input: 2,
  },
  {
    expected: [
      [1, 2, 3],
      [8, 9, 4],
      [7, 6, 5],
    ],
    input: 3,
  },
  {
    expected: [
      [1, 2, 3, 4],
      [12, 13, 14, 5],
      [11, 16, 15, 6],
      [10, 9, 8, 7],
    ],
    input: 4,
  },
  {
    expected: [
      [1, 2, 3, 4, 5],
      [16, 17, 18, 19, 6],
      [15, 24, 25, 20, 7],
      [14, 23, 22, 21, 8],
      [13, 12, 11, 10, 9],
    ],
    input: 5,
  },
  { expected: false, input: 0 },
  { expected: false, input: [1, 3, 5, 7, 9] },
  { expected: false, input: [0] },
  { expected: false, input: [] },
  { expected: false, input: { n1: 1, n2: 2, n3: 3, n4: 4 } },
  { expected: false, input: {} },
  { expected: false, input: "102" },
  { expected: false, input: ["2", 4, "6", 8, 10] },
  { expected: false, input: "[1, 3, 5, 7, 9]" },
  { expected: false, input: true },
  { expected: false, input: false },
  { expected: false, input: undefined },
  { expected: false, input: null },
];

test(testCases);
function test(testCases) {
  testCases.forEach((testCase, index) => {
    const result = spiralMatrix(testCase.input);
    let flag = true;

    if (typeof result === "boolean") {
      if (result === testCase.expected) {
        console.log(`Testcase ${index + 1} passed`);
      } else console.log(`Testcase ${index + 1} failed`);
    } else {
      if (Array.isArray(result) && Array.isArray(testCase.expected)) {
        for (let i = 0; i < testCase.expected.length; i++) {
          for (let j = 0; j < testCase.expected.length; j++) {
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

function spiralMatrix(n) {
  if (typeof n !== "number" || n === 0) return false;
  const matrix = [];
  for (let i = 0; i < n; i++) {
    let arr = [];
    for (let j = 0; j < n; j++) {
      arr.push(0);
    }
    matrix.push(arr);
  }
  let num = 1;
  let left = 0;
  let right = n - 1;
  let top = 0;
  let bottom = n - 1;

  while (left <= right && top <= bottom) {
    for (let i = left; i <= right; i++) {
      matrix[top][i] = num;
      num++;
    }
    top++;
    for (let i = top; i <= bottom; i++) {
      matrix[i][right] = num;
      num++;
    }
    right--;
    for (let i = right; i >= left; i--) {
      matrix[bottom][i] = num;
      num++;
    }
    bottom--;
    for (let i = bottom; i >= top; i--) {
      matrix[i][left] = num;
      num++;
    }
    left++;
  }
  return matrix;
}
