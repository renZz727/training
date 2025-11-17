type People = string[] | string | number[];
type Output = string[][] | number[][] | string;

export function SeatingArrangementWithRoundTable(people: People[]): Output {
  if (!Array.isArray(people)) return "invalid input";
  const used = Array(people.length).fill(false);
  const result: People = [];
  let flag = true;
  function fact(num: number): number | undefined {
    if (num === 0) return;
    if (num === 1) return 1;
    return num * fact(num - 1);
  }
  function backtracking(path: People) : Output | undefined{
    if (path.length === people.length) {
      for (let i = 0; i < people.length; i++) {
        if (JSON.stringify(path.toReversed()) === JSON.stringify(result[i])) {
          flag = false;
        }
      }
      if (flag === true) return result.push([...path]);
      else return;
    }
    for (let i = 0; i < people.length; i++) {
      if (used[i]) continue;
      used[i] = true;
      path.push(people[i]);
      if (result.length !== fact(people.length - 1)) backtracking(path);
      path.pop();
      used[i] = false;
    }
  }
  backtracking([]);
  return result;
}
