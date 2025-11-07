const testCases = [
  { expected: 4, input: [1, 2, 1, 3, 3, 4, 2] },
  { expected: 5, input: [2, 3, 4, 4, 3, 5, 2] },
  { expected: 23, input: [10, 12, 23, 12, 10] },
  { expected: 3, input: [1, 1, 3, 2, 2, 4, 4, 5, 5] },
  { expected: 4, input: [1, 1, 3, 3, 4] },
  { expected: "no duplicates in the input", input: [1, 3, 5, 9] },
  { expected: "no unique number", input: [1, 1, 5, 5] },
  { expected: "input is not an array", input: false },
  { expected: "input is not an array", input: "21" },
  { expected: "input is not an array", input: " " },
  { expected: "input is not an array", input: { num: 21 } },
  { expected: "input is not an array", input: {} },
  { expected: 21, input: [21] },
  { expected: "input is not an array", input: undefined },
  { expected: "input is not an array", input: null },
];
test(testCases);
function test(testCases) {
  testCases.forEach((testCase, index) => {
    const result = findUniqueNumber(testCase.input);

    // console.log(testCase.expected, " ", result);
    if (testCase.expected === result)
      console.log(`Testcase ${index + 1} passed`);
    else console.log(`Testcase ${index + 1} failed`);
  });
}

function findUniqueNumber(arr) {
  if (!Array.isArray(arr)) return "input is not an array";

  let dup = arr.filter((num, index) => {
    if (arr.indexOf(num) !== index) return num;
  });
  if (arr.length === 1) return arr[0];
  if (dup.length === 0) return "no duplicates in the input";

  for (let i = 0; i < arr.length; i++) {
    if (!dup.includes(arr[i])) return arr[i];
  }
  return "no unique number";
}
