function removeFalsy(arr) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (Boolean(arr[i])) {
      result.push(arr[i]);
    }
  }
  return result;
}

let undefinedValue;
console.log(removeFalsy([54, false, null, 9, "HI", 0]));
console.log(removeFalsy([-0, undefinedValue, NaN, "hello", Number("ten")]));
