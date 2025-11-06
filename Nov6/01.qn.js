const testCases = [
  { expected: [0, 1], input: [2, 7, 11, 15], target: 9 },
  { expected: -1, input: [2, 7, 11, 15], target: 4 },
  { expected: [2, 3], input: [12, 5, 6, 2], target: 8 },
  { expected: [0, 1], input: [1, 2, 4, 6, 8, 10], target: 3 },
  { expected: [0, 1], input: [2, 3, 5, 7, 9], target: 5 },
  { expected: -1, input: [1, 3, 5, 7, 9], target: 2 },
  { expected: -1, input: [0], target: 2 },
  { expected: -1, input: [], target: 2 },
  { expected: false, input: { n1: 1, n2: 2, n3: 3, n4: 4 }, target: 2 },
  { expected: false, input: {}, target: 2 },
  { expected: false, input: 10, target: "2" },
  { expected: false, input: ["2", 4, "6", 8, 10], target: { num: 2 } },
  { expected: false, input: "[1, 3, 5, 7, 9]", target: 2 },
  { expected: false, input: true, target: 2 },
  { expected: false, input: false, target: 2 },
  { expected: false, input: undefined, target: 2 },
  { expected: false, input: null, target: 2 },
];

test(testCases);
function test(testCases) {
  testCases.forEach((testCase, index) => {
    const result = twoSum(testCase.input, testCase.target);
    let flag = true;

    if (typeof result === "boolean") {
      if (result === testCase.expected) {
        console.log(`Testcase ${index + 1} passed`);
      } else console.log(`Testcase ${index + 1} failed`);
    } else {
      if (Array.isArray(result) && Array.isArray(testCase.expected)) {
        for (let i = 0; i < testCase.expected.length; i++) {
          if (testCase.expected[i] !== result[i]) flag = false;
        }
      } else {
        if (result !== testCase.expected) flag = false;
      }
      if (flag === true) console.log(`Testcase ${index + 1} passed`);
      else console.log(`Testcase ${index + 1} failed`);
    }
  });
}

function twoSum(arr, target) {
  if (!Array.isArray(arr) || typeof target !== "number") return false;
  for (let i = 0; i < arr.length; i++) {
    let next = target - arr[i];
    if (arr.includes(next) && arr.indexOf(arr[i]) !== arr.indexOf(next))
      return [arr.indexOf(arr[i]), arr.indexOf(next)];
  }
  return -1;
}

// console.log(twoSum([2, 7, 11, 15], 9));
// console.log(twoSum([12, 5, 6, 2], 8));
