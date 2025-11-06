const testCases = [
  { expected: 2, input: [1, 3, 5, 6], target: 5 },
  { expected: 1, input: [1, 3, 5, 6], target: 2 },
  { expected: 2, input: [1, 3, 5, 6], target: 4 },
  { expected: 4, input: [1, 3, 5, 6], target: 7 },
  { expected: 3, input: [1, 3, 5, 8], target: 7 },
  { expected: 0, input: [1, 3, 5, 9], target: 0 },
  { expected: 0, input: [12, 18, 22, 73], target: 5 },
  { expected: false, input: false, target: 5 },
  { expected: false, input: "21", target: 5 },
  { expected: false, input: " ", target: 5 },
  { expected: false, input: { num: 21 }, target: 5 },
  { expected: false, input: {}, target: 5 },
  { expected: false, input: [21] },
  { expected: false, input: undefined, target: 5 },
  { expected: false, input: null, target: 5 },
];
test(testCases);
function test(testCases) {
  testCases.forEach((testCase, index) => {
    const result = findIndex(testCase.input, testCase.target);

    if (testCase.expected === result)
      console.log(`Testcase ${index + 1} passed`);
    else console.log(`Testcase ${index + 1} failed`);
  });
}

function findIndex(arr, target) {
  if (!Array.isArray(arr) || typeof target !== "number") return false;
  if (arr.includes(target)) return arr.indexOf(target);
  let nextNum = -1;
  let i = 0;
  while (target > nextNum) {
    nextNum = arr[i];
    i++;
  }
  if (arr.indexOf(nextNum) === -1) return arr.length;
  else return arr.indexOf(nextNum);
}
