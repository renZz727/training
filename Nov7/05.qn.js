function minPathSum(arr) {
  let minPath = 0;
  for (let i = 0; i < arr.length; i++) {
    let min = Number.MAX_VALUE;
    for (let j = 0; j < arr[i].length; j++) {
      if (min > arr[i][j]) {
        min = arr[i][j];
      }
    }
    minPath += min;
  }
  return minPath;
}

console.log(minPathSum([[2], [3, 4], [6, 5, 7], [4, 1, 8, 3]]));
console.log(minPathSum([[4], [1, 3], [2, 5, 3], [4, 1, 3, 8]]));
console.log(minPathSum([[1], [-1, -2], [0, -3, 6], [2, 0, 1, -3]]));
