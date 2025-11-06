function changeMatrix(arr) {
  const indices = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] === 0) {
        indices.push([i, j, arr[i].length]);
      }
    }
  }
  for (let i = 0; i < indices.length; i++) {
    for (let j = 0; j < indices[i].length; j++) {
      let row = indices[i][0];
      let column = indices[i][1];
      let length = indices[i][2];
      for (let left = 0; left < length; left++) {
        arr[row][left] = 0;
      }
      for (let top = 0; top < arr.length; top++) {
        arr[top][column] = 0;
      }
    }
  }
  return arr;
}

console.log(
  changeMatrix([
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1],
  ])
);
console.log(
  changeMatrix([
    [0, 1, 2, 0],
    [3, 4, 5, 2],
    [1, 3, 1, 5],
  ])
);
console.log(
  changeMatrix([
    [0, 1, 2, 0],
    [3, 0, 5, 2],
    [1, 3, 1, 5],
  ])
);
