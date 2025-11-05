function reverseVowels(string) {
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
console.log(reverseVowels("IceCreAm"));
console.log(reverseVowels("eLepHAnt"));
console.log(reverseVowels("DreAm CrEAm"));

