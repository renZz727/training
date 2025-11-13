export function detectSymmetry(matrix: number[][]): {
  horizontal: boolean;
  vertical: boolean;
  diagonal: boolean;
} {
  let hFlag = true;
  let vFlag = true;
  let dFlag = true;
  for (let row = 0; row < matrix.length; row++) {
    if (matrix[row][0] !== matrix[row][matrix[row].length - 1]) hFlag = false;
  }
  const rowLen = matrix[0].length;
  for (let i = 0; i < rowLen; i++) {
    if (matrix[0][i] !== matrix[matrix.length - 1][i]) vFlag = false;
  }

  let topVal = rowLen - 1;
  let bottomVal = 0;
  let col = matrix.length - 1;
  for (let i = 0; i < matrix.length / 2; i++) {
    if (matrix[i][topVal] !== matrix[col][bottomVal]) dFlag = false;
    topVal--;
    bottomVal++;
    col--;
  }
  return { horizontal: hFlag, vertical: vFlag, diagonal: dFlag };
}
