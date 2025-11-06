const testCases = [
  { expected: 1, input: "roses are red" },
  { expected: -1, input: "aabb" },
  { expected: 5, input: "roses are redo" },
  { expected: 1, input: "eLepHAnt" },
  { expected: 0, input: "DreAm CrEAm" },
  { expected: 0, input: "watEr MeLOn" },
  { expected: 2, input: "aeroPlaNE" },
  { expected: -1, input: "Twinkle twinkle..." },
  { expected: 8, input: "aabbccddeffg" },
  { expected: false, input: true },
  { expected: false, input: false },
  { expected: 0, input: "21" },
  { expected: -1, input: " " },
  { expected: false, input: { num: 21 } },
  { expected: false, input: {} },
  { expected: false, input: [21] },
  { expected: false, input: undefined },
  { expected: false, input: null },
];

test(testCases);
function test(testCases) {
  testCases.forEach((testCase, index) => {
    const result = nonRepeatingChar(testCase.input);

    if (testCase.expected === result)
      console.log(`Testcase ${index + 1} passed`);
    else console.log(`Testcase ${index + 1} failed`);
  });
}

function nonRepeatingChar(str) {
  if (typeof str !== "string" || str === null) return false;
  str = str.toLowerCase().replaceAll(" ", "");
  let freq = {};
  for (let i = 0; i < str.length; i++) {
    let count = 0;
    for (let j = 0; j < str.length; j++) {
      if (str[i] === str[j]) count++;
    }
    freq[`${str[i]}`] = count;
  }
  for (let i = 0; i < str.length; i++) {
    if (freq[str[i]] === 1) return i;
  }
  return -1;
}
// console.log(nonRepeatingChar("roses are red"));
// console.log(nonRepeatingChar("roses are redo"));
// console.log(nonRepeatingChar("Everyday is a new beginning"));
// console.log(nonRepeatingChar("aabbccdd"));
