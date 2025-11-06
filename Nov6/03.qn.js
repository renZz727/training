function spiralMatrix(n) {
  const matrix = [];
  for (let i = 0; i < n; i++) {
    let arr = [];
    for (let j = 0; j < n; j++) {
      arr.push(0);
    }
    matrix.push(arr);
  }
  let num = 1;
  let left = 0;
  let right = n - 1;
  let top = 0;
  let bottom = n - 1;

  while (left <= right && top <= bottom) {
    for (let i = left; i <= right; i++) {
      matrix[top][i] = num;
      console.log(num);
      num++;
    }
    top++;
    for (let i = top; i <= bottom; i++) {
      matrix[i][right] = num;
      console.log(num);
      num++;
    }
    right--;
    for (let i = right; i >= left; i--) {
      matrix[bottom][i] = num;
      console.log(num);
      num++;
    }
    bottom--;
    for (let i = bottom; i >= top; i--) {
      matrix[i][left] = num;
      console.log(num);
      num++;
    }
    left++;
  }
  return matrix;
}

console.log(spiralMatrix(2));
console.log(spiralMatrix(3));
console.log(spiralMatrix(4));
