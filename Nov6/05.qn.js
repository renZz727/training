const testCases = [
  {
    expected: [
      [1, 0, 1],
      [0, 0, 0],
      [1, 0, 1],
    ],
    input: [
      [1, 1, 1],
      [1, 0, 1],
      [1, 1, 1],
    ],
  },
  {
    expected: [
      [0, 0, 0, 0],
      [0, 4, 5, 0],
      [0, 3, 1, 0],
    ],
    input: [
      [0, 1, 2, 0],
      [3, 4, 5, 2],
      [1, 3, 1, 5],
    ],
  },
  {
    expected: [
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 1, 0],
    ],
    input: [
      [0, 1, 2, 0],
      [3, 0, 5, 2],
      [1, 3, 1, 5],
    ],
  },
  {
    expected: [
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
    ],
    input: [
      [0, 1, 0, 0],
      [3, 0, 5, 2],
      [1, 3, 1, 5],
    ],
  },
  {
    expected: [
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 1, 0],
      [0, 0, 1, 0],
    ],
    input: [
      [0, 1, 6, 0],
      [3, 0, 5, 2],
      [1, 3, 1, 5],
      [1, 3, 1, 5],
    ],
  },
  {
    expected: [
      [1, 1, 6, 1],
      [3, 1, 5, 2],
      [1, 3, 1, 5],
      [1, 3, 1, 5],
    ],
    input: [
      [1, 1, 6, 1],
      [3, 1, 5, 2],
      [1, 3, 1, 5],
      [1, 3, 1, 5],
    ],
  },
  { expected: [0], input: [0] },
  { expected: false, input: [] },
  { expected: false, input: { n1: 1, n2: 2, n3: 3, n4: 4 } },
  { expected: false, input: {} },
  { expected: false, input: "102" },
  { expected: ["0", 4, "6", 8, 10], input: ["0", 4, "6", 8, 10] },
  { expected: false, input: "[1, 3, 5, 7, 9]" },
  { expected: false, input: true },
  { expected: false, input: false },
  { expected: false, input: undefined },
  { expected: false, input: null },
];

test(testCases);
function test(testCases) {
  testCases.forEach((testCase, index) => {
    const result = changeMatrix(testCase.input);
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

function changeMatrix(arr) {
  if (!Array.isArray(arr) || arr.length === 0) return false;
  const indices = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] === 0) {
        indices.push([i, j, arr[i].length]);
      }
    }
  }
  for (let i = 0; i < indices.length; i++) {
    for (let j = 0; j < indices[i].length; j++) {
      let row = indices[i][0];
      let column = indices[i][1];
      let length = indices[i][2];
      for (let left = 0; left < length; left++) {
        arr[row][left] = 0;
      }
      for (let top = 0; top < arr.length; top++) {
        arr[top][column] = 0;
      }
    }
  }
  return arr;
}
