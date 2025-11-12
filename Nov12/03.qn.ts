export function sortByScoreRank(data: number[]) {
  const result: { [key: string]: number }[] = [];
  const map = new Map();
  let obj: { [key: string]: number } = {};
  let rank = 0;

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
