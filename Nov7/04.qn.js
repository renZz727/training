const testCases = [
  {
    expected: [
      [1, 2],
      [1, 3],
      [1, 4],
      [2, 3],
      [2, 4],
      [3, 4],
    ],
    input: 4,
    k: 2,
  },
  {
    expected: [[1]],
    input: 1,
    k: 1,
  },
  {
    expected: [
      [1, 2, 3],
      [1, 2, 4],
      [1, 3, 4],
      [2, 3, 4],
    ],
    input: 4,
    k: 3,
  },
  {
    expected: [[1], [2], [3], [4], [5], [6]],
    input: 6,
    k: 1,
  },
  {
    expected: [
      [1, 2, 3, 4],
      [1, 2, 3, 5],
      [1, 2, 4, 5],
      [1, 3, 4, 5],
      [2, 3, 4, 5],
    ],
    input: 5,
    k: 4,
  },
  {
    expected: [[]],
    input: 5,
    k: 0,
  },
  { expected: [[1, 2]], input: 2, k: 2 },
  { expected: "inputs are not numbers", input: [1, 3, 5], k: "2" },
  { expected: "inputs are not numbers", input: [1, 3, 5, 7, 1], k: 2 },
  { expected: "inputs are not numbers", input: {}, k: 2 },
  { expected: "inputs are not numbers", input: "10", k: 2 },
  { expected: "inputs are not numbers", input: ["2", 4, "6", 8, 10], k: 2 },
  { expected: "inputs are not numbers", input: "[1, 3, 5, 7, 9]", k: 2 },
  { expected: "inputs are not numbers", input: true, k: 2 },
  { expected: "inputs are not numbers", input: false, k: 2 },
  { expected: "inputs are not numbers", input: undefined, k: 2 },
  { expected: "inputs are not numbers", input: null, k: 2 },
];

test(testCases);
function test(testCases) {
  testCases.forEach((testCase, index) => {
    const result = combinations(testCase.input, testCase.k);
    let flag = true;

    if (typeof result === "boolean") {
      if (result === testCase.expected) {
        console.log(`Testcase ${index + 1} passed`);
      } else console.log(`Testcase ${index + 1} failed`);
    } else {
      if (Array.isArray(result) && Array.isArray(testCase.expected)) {
        if (testCase.expected.length === result.length) {
          for (let i = 0; i < testCase.expected.length; i++) {
            for (let j = 0; j < testCase.expected[i].length; j++) {
              if (testCase.expected[i][j] !== result[i][j]) flag = false;
            }
          }
        } else flag = false;
      } else {
        if (result !== testCase.expected) flag = false;
      }
      if (flag === true) console.log(`Testcase ${index + 1} passed`);
      else console.log(`Testcase ${index + 1} failed`);
    }
  });
}

function combinations(n, k) {
  if (typeof n !== "number" || typeof k !== "number")
    return "inputs are not numbers";
  let result = [];
  let nums = [];

  for (let i = 1; i <= n; i++) {
    nums.push(i);
  }
  let backtrack = (path, start) => {
    if (path.length === k) {
      result.push([...path]);
    }

    for (let i = start; i < n; i++) {
      path.push(nums[i]);
      backtrack(path, i + 1);
      path.pop();
    }
  };

  backtrack([], 0);
  return result;
}
