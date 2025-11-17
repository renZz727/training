export function sortByScoreRank(data: number[]) {
  const result: { [key: string]: number }[] = [];
  const map = new Map();
  // let obj: { [key: string]: number }= {};
  let rank = 0;
  let obj: Record<string, number> = {};
  data.sort((a, b) => b - a);
  for (let score of data) {
    obj = {};
    if (!map.has(score)) {
      rank++;
      obj["score"] = score;
      obj["rank"] = rank;
      map.set(score, rank);
    } else {
      obj["score"] = score;
      obj["rank"] = rank;
    }
    result.push(obj);
  }
  return result;
}

// export function sortByScoreRank(data: number[]) {
//   const result: { score: number; rank: number }[] = [];
//   const map = new Map<number, number>(); // score → rank
//   let rank = 0;

//   data.sort((a, b) => b - a);

//   for (let score of data) {
//     if (!map.has(score)) {
//       rank++;
//       map.set(score, rank);
//     }

//     result.push({
//       score,
//       rank: map.get(score)!
//     });
//   }

//   return result;
// }
