export function teamSelection(
  players: string[],
  teamSize: number | string | boolean
): string[][] | string {
  if (!Array.isArray(players) || typeof teamSize !== "number")
    return "invalid inputs";
  if (players.length < teamSize)
    return "Team size should be less than total count";

  const result: string[][] = [];

  function backtrack(path: string[], start: number) {
    if (path.length === teamSize) {
      result.push([...path]);
    }
    for (let i = start; i < players.length; i++) {
      path.push(players[i]);
      backtrack(path, i + 1);
      path.pop();
    }
  }
  backtrack([], 0);
  return result;
}
