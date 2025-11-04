const testCases = [
  { expected: [[2, 3], [5]], arr: [2, 3, 5], target: 5 },
  { expected: [[3]], arr: [2, 3, 5], target: 3 },
  { expected: [], arr: [9, 3, 5, 11], target: 4 },
  { expected: [[2, 5], [7]], arr: [2, 2, 5, 7, 9], target: 7 },
  { expected: [[2]], arr: [2, 3, 5, 11, 16], target: 2 },
  { expected: [[-2, 3]], arr: [-2, 3, 5], target: 1 },
  { expected: [[-3, 4]], arr: [2, -3, 4], target: 1 },
  { expected: false, arr: "2, 3, 5", target: 3 },
  { expected: false, arr: [2, 3, 5], target: "3" },
  { expected: false, arr: "[2, 3, 5]", target: "3" },
  { expected: false, arr: { arr: [2, 3, 5] }, target: 5 },
  { expected: false, arr: [2, 3, 5], target: { num: 5 } },
  { expected: false, arr: 2345, target: "3" },
  { expected: false, arr: [2, 3, 5], target: ["3"] },
  { expected: false, arr: [2, 3, 5], target: false },
  { expected: false, arr: [2, 3, 5], target: true },
  { expected: false, arr: [2, 3, 5], target: undefined },
  { expected: false, arr: [2, 3, 5], target: null },
];

test(testCases);
function test(testCases) {
  testCases.forEach((testCase, index) => {
    const result = equalSums(testCase.arr, testCase.target);

    let flag = true;
    if (typeof result === "boolean") {
      if (testCase.expected === result)
        console.log(`Testcase ${index + 1} is passed`);
      else console.log(`Testcase ${index + 1} is failed`);
    } else {
      if (testCase.expected.length === result.length) {
        for (let i = 0; i < testCase.expected.length; i++) {
          for (let j = 0; j < testCase.expected.length; j++) {
            if (testCase.expected[i][j] !== result[i][j]) flag = false;
          }
        }
        if (flag === true) console.log(`Testcase ${index + 1} is passed`);
        else console.log(`Testcase ${index + 1} failed`);
      } else console.log(`Testcase ${index + 1} failed`);
    }
  });
}
function equalSums(arr, target) {
  if (!Array.isArray(arr) || typeof target !== "number") return false;
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    let sum = 0;
    let sub = [];
    for (let j = i; j < arr.length; j++) {
      if (sum + arr[j] <= target) {
        sum += arr[j];
        sub.push(arr[j]);
      } else j = arr.length;
    }
    let arrSum = 0;
    for (let m = 0; m < sub.length; m++) {
      arrSum += sub[m];
    }
    if (arrSum === target) result.push(sub);
  }
  return result;
}
