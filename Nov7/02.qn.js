function findUniqueNumber(arr) {
  let dup = arr.filter((num, index) => {
    if (arr.indexOf(num) !== index) return num;
  });
  for (let i = 0; i < arr.length; i++) {
    if (!dup.includes(arr[i])) return arr[i];
  }
  return false;
}

console.log(findUniqueNumber([1, 2, 1, 3, 3, 4, 2]));
console.log(findUniqueNumber([2, 3, 4, 4, 3, 5, 2]));
console.log(findUniqueNumber([10, 12, 23, 12, 10]));
console.log(findUniqueNumber([1, 1, 3, 2, 2, 4, 4, 5, 5]));
