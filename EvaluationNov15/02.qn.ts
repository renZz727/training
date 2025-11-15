export function groupAnagram(words: string[]): string[][] {
  const map = new Map();

  for (const word of words) {
    const key = word.split("").sort().join("");
    if (!map.has(key)) map.set(key, []);
    map.get(key).push(word);
  }
  return [...map.values()];
}
