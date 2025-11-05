function textJustification(words, maxWidth) {
  const result = [];
  let k = 0;
  for (let j = 0; j < words.length; j++) {
    let wordsLength = 0;
    let line = "";
    for (let i = k; i < words.length; i++) {
        console.log(i);
      wordsLength += words[i].length;
      if (wordsLength <= maxWidth) {
        line += words[i] + " ";
      }
      
      j = i;
      k = i;
    }result.push(line.trim());
  }
  console.log(result);
}
textJustification(
  ["This", "is", "an", "example", "of", "text", "justification."],
  10
);
