function findIndex(arr, target) {
  if (arr.includes(target)) return arr.indexOf(target);
  let nextNum = 0;
  let i = 0;
  while (target > nextNum) {
    nextNum = arr[i];
    i++;
  }
  if (arr.indexOf(nextNum) === -1) return arr.length;
  else return arr.indexOf(nextNum);
}
console.log(findIndex([1, 3, 5, 6], 5));
console.log(findIndex([1, 3, 5, 6], 2));
console.log(findIndex([1, 3, 5, 6], 4));
console.log(findIndex([1, 3, 5, 6], 7));
