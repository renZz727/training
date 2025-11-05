let undefinedValue;
const testCases = [
  { expected: [54, 9, "HI"], input: [54, false, null, 9, "HI", 0] },
  {
    expected: [],
    input: [-0, undefined, NaN],
  },
  {
    expected: ["hi"],
    input: [NaN, "hi", Number("ten")],
  },
  { expected: ["AN"], input: ["AN", undefinedValue] },
  { expected: [1, 3], input: [1, 3] },
  { expected: false, input: { arr: [54, false, null, 9, "HI", 0] } },
  {
    expected: [54],
    input: [54, false, null, NaN],
  },
  { expected: false, input: [] },
  { expected: false, input: {} },
  { expected: false, input: "274" },
  { expected: [true], input: [false, true] },
  { expected: false, input: 124 },
  { expected: false, input: true },
  { expected: false, input: false },
  { expected: false, input: undefined },
  { expected: false, input: null },
];

test(testCases);
function test(testCases) {
  testCases.forEach((testCase, index) => {
    const result = removeFalsy(testCase.input);

    let flag = true;
    if (typeof result === "boolean") {
      if (result === testCase.expected) {
        console.log(`Testcase ${index + 1} passed`);
      } else console.log(`Testcase ${index + 1} failed`);
    } else {
      let testExpected = testCase.expected;
      for (let i = 0; i < testExpected.length; i++) {
        if (testCase.expected[i] !== result[i]) {
          flag = false;
        }
      }
      if (flag === true) console.log(`Testcase ${index + 1} passed`);
      else console.log(`Testcase ${index + 1} failed`);
    }
  });
}

function removeFalsy(arr) {
  if (!Array.isArray(arr) || arr === null) return false;
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (Boolean(arr[i])) {
      result.push(arr[i]);
    }
  }
  return result;
}

// console.log(removeFalsy([54, false, null, 9, "HI", 0]));
// console.log(
//   removeFalsy([-0, undefinedValue, NaN, "hello", Number("ten"), NaN])
// );
// console.log(removeFalsy([-0n, undefined, NaN, 47, Number("34")]));
