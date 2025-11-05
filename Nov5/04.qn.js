const testCases = [
  { expected: true, str1: "IceCreAm", str2: "AceCreIm" },
  { expected: true, str1: "a", str2: "aab" },
  { expected: true, str1: "acd", str2: "aabcd" },
  { expected: false, str1: "acd", str2: "aab" },
  { expected: false, str1: "watEr MeLOn", str2: "aabcd" },
  { expected: false, str1: "a", str2: "b" },
  { expected: false, str1: "c", str2: "aab" },
  { expected: false, str1: "ac", str2: "aab" },
  { expected: true, str1: "abab", str2: "abab" },
  { expected: false, str1: "21", str2: "" },
  { expected: false, str1: "ababa", str2: "abab" },
  { expected: false, str1: "aabbccdd", str2: "a" },
  { expected: false, str1: {}, str2: "aaa" },
  { expected: false, str1: [21], str2: "bad" },
  { expected: false, str1: undefined, str2: "acdd" },
  { expected: false, str1: null, str2: "xzss" },
];

test(testCases);
function test(testCases) {
  testCases.forEach((testCase, index) => {
    const result = strCompare(testCase.str1, testCase.str2);

    if (testCase.expected === result)
      console.log(`Testcase ${index + 1} passed`);
    else console.log(`Testcase ${index + 1} failed`);
  });
}

function strCompare(strA, strB) {
  if (
    typeof strA !== "string" ||
    typeof strB !== "string" ||
    strA === null ||
    strB === null
  )
    return false;
  if (strA.length > strB.length) return false;
  strA = strA.toLowerCase().replaceAll(" ", "");
  strB = strB.toLowerCase().replaceAll(" ", "");

  strA = [...strA];
  strB = [...strB];

  let freqA = {};
  let freqB = {};

  for (let i = 0; i < strA.length; i++) {
    let count = 0;
    for (let j = 0; j < strA.length; j++) {
      if (strA[i] === strA[j]) count++;
    }
    freqA[strA[i]] = count;
  }
  for (let i = 0; i < strB.length; i++) {
    let count = 0;
    for (let j = 0; j < strB.length; j++) {
      if (strB[i] === strB[j]) count++;
    }
    freqB[strB[i]] = count;
  }
  for (let letter in freqA) {
    if (!freqB.hasOwnProperty(letter) || freqA[letter] > freqB[letter])
      return false;
  }
  return true;
}
