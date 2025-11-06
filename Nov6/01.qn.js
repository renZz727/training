function twoSum(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    let next = target - arr[i];
    if (arr.includes(next)) return [arr.indexOf(arr[i]), arr.indexOf(next)];
  }
  return -1;
}

console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([12, 5, 6, 2], 8));
