function strCompare(strA, strB) {
  if (strA.length >= strB.length) return false;
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
console.log(strCompare("a", "aab"));
console.log(strCompare("ab", "aab"));
console.log(strCompare("acd", "aabcd"));
console.log(strCompare("a", "b"));
console.log(strCompare("aabb", "aab"));
console.log(strCompare("ac", "aab"));
console.log(strCompare("abab", "abab"));
console.log(strCompare("ababa", "abab"));
console.log(strCompare("aabbccdd", "a"));
