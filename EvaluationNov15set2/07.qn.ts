export function romanToInteger(roman: string): number {
  let result = 0;
  for (let i = 0; i < roman.length; i++) {
    if (roman[i] === "M") {
      result += 1000;
    } else if (roman[i] === "C") {
      if (roman[i + 1]) {
        if (roman[i + 1] === "M") {
          result += 900;
          i++;
        } else if (roman[i + 1] === "D") {
          result += 400;
          i++;
        } else result += 100;
      }
    } else if (roman[i] === "X") {
      if (roman[i + 1]) {
        if (roman[i + 1] === "C") {
          result += 90;
          i++;
        } else if (roman[i + 1] === "L") {
          result += 40;
          i++;
        } else result += 10;
      } else result += 10;
    } else if (roman[i] === "I") {
      if (roman[i + 1]) {
        if (roman[i + 1] === "V") {
          result += 4;
          i++;
        } else if (roman[i + 1] === "X") {
          result += 9;
          i++;
        } else result += 1;
      } else result += 1;
    }
  }
  return result;
}
