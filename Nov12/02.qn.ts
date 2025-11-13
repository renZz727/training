export function findAvailableSeats(
  seatGrid: number[][],
  groupSize: number
): number[][] {
  const coordinates: number[][] = [];
  let flag = true;
  let count = 0;
  let indexes: number[][] = [];
  for (let i = 0; i < seatGrid.length; i++) {
    for (let j = 0; j < seatGrid[i].length; j++) {
      if (seatGrid[i][j] === 0) {
        indexes.push([i, j]);
        count++;
        flag = true;
      } else {
        flag = false;
        count = 0;
        indexes = [];
      }
      if (flag === true && count === groupSize) {
        coordinates.push([...indexes[0]]);
        count = 0;
        indexes = [];
      }
    }
  }
  return coordinates;
}
