const testCases = [
  {
    expected: [
      [19, 17, 16, 15],
      [10, 1, 14, 4],
      [3, 2, 12, 20],
      [7, 5, 18, 11],
      [9, 8, 6, 13],
    ],
    input: [
      19, 10, 3, 7, 9, 8, 5, 2, 1, 17, 16, 14, 12, 18, 6, 13, 11, 20, 4, 15,
    ],
    row: 5,
    col: 4,
  },
  {
    expected: [
      [19, 2, 1, 13, 11],
      [10, 5, 17, 6, 20],
      [3, 8, 16, 18, 4],
      [7, 9, 14, 12, 15],
    ],
    input: [
      19, 10, 3, 7, 9, 8, 5, 2, 1, 17, 16, 14, 12, 18, 6, 13, 11, 20, 4, 15,
    ],
    row: 4,
    col: 5,
  },
  {
    expected: [
      [17, 6, 13, 10],
      [16, 18, 11, 15],
      [14, 12, 20, 4],
    ],
    input: [17, 16, 14, 12, 18, 6, 13, 11, 20, 4, 15, 10],
    row: 3,
    col: 4,
  },
  {
    expected: [
      [1, 6],
      [2, 4],
    ],
    input: [1, 2, 4, 6],
    row: 2,
    col: 2,
  },
  {
    expected: [
      [2, 7, 9],
      [3, 5, 3],
    ],
    input: [2, 3, 5, 7, 9, 3],
    row: 2,
    col: 3,
  },
  {
    expected: [
      [2, 3],
      [3, 9],
      [5, 7],
    ],
    input: [2, 3, 5, 7, 9, 3],
    row: 3,
    col: 2,
  },
  { expected: [[0], [1]], input: [0, 1], row: 2, col: 1 },
  { expected: "inputs are not valid", input: [1, 3, 5], row: 2, col: 2 },
  { expected: "inputs are not valid", input: [1, 3, 5, 7, 1], row: 2, col: 2 },
  { expected: "inputs are not valid", input: {}, row: 5, col: 4 },
  { expected: "inputs are not valid", input: 10, row: 5, col: 4 },
  {
    expected: "inputs are not valid",
    input: ["2", 4, "6", 8, 10],
    row: 5,
    col: 4,
  },
  {
    expected: "inputs are not valid",
    input: "[1, 3, 5, 7, 9]",
    row: 5,
    col: 4,
  },
  { expected: "inputs are not valid", input: true, row: 5, col: 4 },
  { expected: "inputs are not valid", input: false, row: 5, col: 4 },
  { expected: "inputs are not valid", input: undefined, row: 5, col: 4 },
  { expected: "inputs are not valid", input: null, row: 5, col: 4 },
];

test(testCases);
function test(testCases) {
  testCases.forEach((testCase, index) => {
    const result = arrayTraversal(testCase.input, testCase.row, testCase.col);
    let flag = true;

    if (typeof result === "boolean") {
      if (result === testCase.expected) {
        console.log(`Testcase ${index + 1} passed`);
      } else console.log(`Testcase ${index + 1} failed`);
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

function arrayTraversal(nums, row, col) {
  if (
    !Array.isArray(nums) ||
    typeof row !== "number" ||
    typeof col !== "number" ||
    nums.length !== row * col
  )
    return "inputs are not valid";
  let matrix = [];
  for (let i = 0; i < row; i++) {
    let mat = [];
    for (let j = 0; j < col; j++) {
      mat.push(0);
    }
    matrix.push(mat);
  }
  let top = 0;
  let bottom = row - 1;
  let left = 0;
  let right = col - 1;

  let value = 0;
  while (left <= right) {
    for (let i = top; i <= bottom; i++) {
      matrix[i][left] = nums[value];
      value++;
    }
    left++;

    if (left <= right) {
      for (let i = bottom; i >= top; i--) {
        matrix[i][left] = nums[value];
        value++;
      }
      left++;
    }
  }

  return matrix;
}

// console.log(
//   arrayTraversal([17, 16, 14, 12, 18, 6, 13, 11, 20, 4, 15, 10], 3, 4)
// );
