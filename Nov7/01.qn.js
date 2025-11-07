const testCases = [
  { expected: 2, input: "(()" },
  { expected: 4, input: ")()())" },
  { expected: 4, input: "(())" },
  { expected: 2, input: "))()(" },
  { expected: 4, input: "(()))))" },
  { expected: 0, input: ")))))(((" },
  { expected: 10, input: "()()()()()" },
  { expected: false, input: "(()()())" },
  { expected: false, input: "21" },
  { expected: false, input: " " },
  { expected: false, input: { num: 21 } },
  { expected: false, input: {} },
  { expected: false, input: [21] },
  { expected: false, input: undefined },
  { expected: false, input: null },
];

test(testCases);
function test(testCases) {
  testCases.forEach((testCase, index) => {
    const result = validParetheses(testCase.input, testCase.target);

    if (testCase.expected === result)
      console.log(`Testcase ${index + 1} passed`);
    else console.log(`Testcase ${index + 1} failed`);
  });
}

function validParetheses(str) {
  if (typeof str !== "string" || !isNaN(Number(str))) return false;
  let j = 0;
  let count = 0;
  for (let i = 1; i < str.length; i++) {
    if (str[j] === "(" && str[i] === ")") {
      j++;
      count++;
    } else if (str[j] === ")") j++;
  }
  return count * 2;
}
