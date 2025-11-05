function textJustification(words, maxWidth) {
  const result = [];
  let word = "";
  for (let i = 0; i < words.length; i++) {
    word = "";
    for (let j = i; j < words.length; j++) {
      if (words[j].length <= maxWidth) {
        word += words[j] + " ";
      }
    }
    result.push(word);
  }
  console.log(result);
}
textJustification(
  ["This", "is", "an", "example", "of", "text", "justification."],
  10
);
