const testCases = [
  {
    expected: ["This   is   an", "example     of", "text          "],
    input: ["This", "is", "an", "example", "of", "text", "justification."],
    maxLength: 14,
  },
  {
    expected: [
      "What    must    be",
      "acknowledgment    ",
      "shall be          ",
    ],
    input: ["What", "must", "be", "acknowledgment", "shall", "be"],
    maxLength: 18,
  },
  {
    expected: ["This    is    an", "example  of  text", "justification.  "],
    input: ["This", "is", "an", "example", "of", "text", "justification."],
    maxLength: 16,
  },
  {
    expected: ["What       must       be", "acknowledgment shall be "],
    input: ["What", "must", "be", "acknowledgment", "shall", "be"],
    maxLength: 24,
  },
  {
    expected: ["Life      is", "beautiful   "],
    input: ["Life", "is", "beautiful"],
    maxLength: 12,
  },
  { expected: ["Save   ", "Energy "], input: ["Save", "Energy"], maxLength: 7 },
  { expected: false, input: [0], maxLength: 10 },
  { expected: false, input: [2, 4, 6, 8] },
  { expected: false, input: ["2", 4, "6", 8] },
  { expected: false, input: [] },
  { expected: false, input: ["10, 23"] },
  { expected: ["10        "], input: ["10"], maxLength: 10 },
  { expected: false, input: {} },
  { expected: false, input: { num1: 10, num2: 20 } },
  { expected: false, input: { "num1, num2, num3": "2, 5, 7" } },
  { expected: false, input: "1, 3, 5, 7" },
  { expected: false, input: true },
  { expected: false, input: false },
];
test(testCases);
function test(testCases) {
  testCases.forEach((testCase, index) => {
    const result = textJustification(testCase.input, testCase.maxLength);
    let flag = true;

    if (typeof result === "boolean") {
      if (result === testCase.expected) {
        console.log(`Testcase ${index + 1} passed`);
      } else console.log(`Testcase ${index + 1} failed`);
    } else {
      if (result.length !== testCase.expected.length) flag = false;
      else {
        for (let i = 0; i < result.length; i++) {
          if (testCase.expected[i] !== result[i]) flag = false;
        }
      }
      if (flag === true) console.log(`Testcase ${index + 1} passed`);
      else console.log(`Testcase ${index + 1} failed`);
    }
  });
}

function textJustification(words, maxWidth) {
  if (
    !Array.isArray(words) ||
    words === null ||
    maxWidth === null ||
    typeof maxWidth !== "number"
  )
    return false;
  for (let i = 0; i < words.length; i++) {
    if (typeof words[i] !== "string") return false;
  }
  const result = [];
  const newArray = [];
  let k = 0;
  let length = 0;
  for (let j = 0; j < words.length; j++) {
    let wordsLength = 0;
    let line = "";
    for (let i = k; i < words.length; i++) {
      wordsLength += words[i].length + 1;
      if (wordsLength <= maxWidth) {
        line += words[i] + " ";
      }
    }
    length += line.split(" ").length - 1;
    k = length;
    result.push(line.trim());
  }
  for (let i = 0; i < result.length; i++) {
    if (result[i] !== "") newArray.push(result[i]);
  }

  let resulting = [];
  for (let i = 0; i < newArray.length - 1; i++) {
    let charLen = 0;
    remSpace = 0;
    let noOfWords = 0;
    let words = newArray[i].split(" ");
    for (let j = 0; j < words.length; j++) {
      charLen += words[j].length;
    }
    if (words.length === 1) noOfWords = words.length;
    else noOfWords = words.length - 1;
    remSpace = Math.ceil((maxWidth - charLen) / noOfWords);

    space = "";
    for (let k = 0; k < words.length; k++) {
      space += words[k];
      for (let l = 0; l < remSpace; l++) {
        if (words[k] !== words[words.length - 1]) space += " ";
        if (words.length === 1) {
          space = words[k];
          for (let l = 0; l < remSpace; l++) {
            space += " ";
          }
        }
      }
    }
    resulting.push(space);
  }

  let charL = 0;
  let remSp = 0;
  let wordss = newArray[newArray.length - 1].split(" ");
  for (let j = 0; j < wordss.length; j++) {
    charL += wordss[j].length;
  }
  if (wordss.length === 1) {
    space = newArray[newArray.length - 1];
    remSp = maxWidth - charL;
    for (let l = 0; l < remSp; l++) {
      space += " ";
    }
    resulting.push(space);
  } else {
    space = "";
    remSp = maxWidth - (charL + (wordss.length - 1));
    for (let l = 0; l < wordss.length; l++) {
      space += wordss[l] + " ";
    }
    for (let l = 0; l < remSp - 1; l++) {
      space += " ";
    }
    resulting.push(space);
  }
  return resulting;
}

// console.log(
//   textJustification(
//     ["This", "is", "an", "example", "of", "text", "justification."],
//     16
//   )
// );
// console.log(
//   textJustification(["What", "must", "be", "acknowledgment", "shall", "be"], 16)
// );
