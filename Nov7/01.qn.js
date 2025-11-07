function validParetheses(str) {
  let j = 0;
  let count = 0;
  for (let i = 1; i < str.length; i++) {
    if (str[j] === "(" && str[i] === ")") {
      j++;
      count++;
    } else if (str[j] === ")") j++;
  }
  return count * 2;
}

console.log(validParetheses("(()"));
console.log(validParetheses("()())"));
console.log(validParetheses("()()"));
