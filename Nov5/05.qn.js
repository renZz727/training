function nonRepeatingChar(str) {
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
console.log(nonRepeatingChar("roses are red"));
console.log(nonRepeatingChar("roses are redo"));
console.log(nonRepeatingChar("Everyday is a new beginning"));
console.log(nonRepeatingChar("aabbccdd"));
