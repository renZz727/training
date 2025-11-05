const testCases = [
  { expected: "AceCreIm", input: "IceCreAm" },
  { expected: "ALepHent", input: "eLepHAnt" },
  { expected: "DrAEm CrAem", input: "DreAm CrEAm" },
  { expected: "wOter MELan", input: "watEr MeLOn" },
  { expected: "EraoPleNa", input: "areoPlaNE" },
  { expected: "Twenkli twenkli...", input: "Twinkle twinkle..." },
  { expected: false, input: true },
  { expected: false, input: false },
  { expected: "21", input: "21" },
  { expected: " ", input: " " },
  { expected: false, input: { num: 21 } },
  { expected: false, input: {} },
  { expected: false, input: [21] },
  { expected: false, input: undefined },
  { expected: false, input: null },
];
test(testCases);
function test(testCases) {
  testCases.forEach((testCase, index) => {
    const result = reverseVowels(testCase.input);

    if (testCase.expected === result)
      console.log(`Testcase ${index + 1} passed`);
    else console.log(`Testcase ${index + 1} failed`);
  });
}

function reverseVowels(string) {
  if (typeof string !== "string" || string === null) return false;
  const vowels = ["a", "e", "i", "o", "u"];
  let vowelsIn = [];
  for (let i = 0; i < string.length; i++) {
    if (vowels.includes(string[i].toLowerCase())) {
      vowelsIn.push(string[i]);
    }
  }
  vowelsIn = vowelsIn.reverse();
  let reversedStr = "";
  let index = 0;
  for (let i = 0; i < string.length; i++) {
    if (vowels.includes(string[i].toLowerCase())) {
      reversedStr += vowelsIn[index];
      index++;
    } else reversedStr += string[i];
  }
  return reversedStr;
}
