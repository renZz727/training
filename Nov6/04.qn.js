const testCases = [
  {
    expected: [1, 2, 4],
    input: [1, 2, 3],
  },
  {
    expected: [1, 0],
    input: [9],
  },
  {
    expected: [1, 5],
    input: [1, 4],
  },
  {
    expected: [6],
    input: [5],
  },
  { expected: false, input: 0 },
  { expected: false, input: "[1, 3, 5, 7, 9]" },
  { expected: [1], input: [0] },
  { expected: false, input: [] },
  { expected: false, input: { n1: 1, n2: 2, n3: 3, n4: 4 } },
  { expected: false, input: {} },
  { expected: false, input: "102" },
  { expected: [2, 4, 6, 8, 11], input: [2, 4, 6, 8, 10] },
  { expected: false, input: "[1, 3, 5, 7, 9]" },
  { expected: false, input: true },
  { expected: false, input: false },
  { expected: false, input: undefined },
  { expected: false, input: null },
];

test(testCases);
function test(testCases) {
  testCases.forEach((testCase, index) => {
    const result = interpretsNumber(testCase.input);
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

function interpretsNumber(arr) {
  if (!Array.isArray(arr) || arr === null) return false;
  if (arr.length === 0) return false;
  let result = Number(arr.toString().replaceAll(",", "")) + 1;
  let nums = result
    .toString()
    .split("")
    .map((num) => Number(num));
  return nums;
}
// console.log(interpretsNumber([1, 2, 3]));
// console.log(interpretsNumber([9]));
// console.log(interpretsNumber([1, 0, 2, 4]));
