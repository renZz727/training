function removeFalsy(arr) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (
      arr[i] !== null &&
      arr[i] !== undefined &&
      arr[i] !== false &&
      arr[i] !== NaN &&
      arr[i] !== 0 &&
      arr[i] !== -0 &&
      arr[i] !== 0n &&
      arr[i] !== ""
    ) {
      result.push(arr[i]);
    }
  }
  return result;
}

let undefinedValue;
console.log(removeFalsy([54, false, null, 9, "HI", 0]));
console.log(removeFalsy([-0, undefinedValue, "hello"]));
