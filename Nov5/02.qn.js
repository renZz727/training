function textJustification(words, maxWidth) {
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

console.log(
  textJustification(
    ["This", "is", "an", "example", "of", "text", "justification."],
    16
  )
);
console.log(
  textJustification(["What", "must", "be", "acknowledgment", "shall", "be"], 16)
);
