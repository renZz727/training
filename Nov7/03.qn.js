function arrayTraversal(nums, row, col) {
  let matrix = [];
  for (let i = 0; i < row; i++) {
    let mat = [];
    for (let j = 0; j < col; j++) {
      mat.push(0);
    }
    matrix.push(mat);
  }
  console.log(matrix);
  let top = 0;
  let bottom = row - 1;
  let left = 0;
  let right = col - 1;

  let value = 0;
  while (left <= right) {
    for (let i = top; i <= bottom; i++) {
      matrix[i][left] = nums[value];
      value++;
    }
    left++;

    if (left <= right) {
      for (let i = bottom; i >= top; i--) {
        matrix[i][left] = nums[value];
        value++;
      }
      left++;
    }
  }

  return matrix;
}
console.log(
  arrayTraversal(
    [19, 10, 3, 7, 9, 8, 5, 2, 1, 17, 16, 14, 12, 18, 6, 13, 11, 20, 4, 15],
    5,
    4
  )
);
console.log(
  arrayTraversal(
    [19, 10, 3, 7, 9, 8, 5, 2, 1, 17, 16, 14, 12, 18, 6, 13, 11, 20, 4, 15],
    4,
    5
  )
);
console.log(
  arrayTraversal([17, 16, 14, 12, 18, 6, 13, 11, 20, 4, 15, 10], 3, 4)
);
