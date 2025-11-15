export function wordPattern(pattern: string, str: string): boolean {
  const map = new Map();
  const words = str.split(" ");
  for (let i = 0; i < pattern.length; i++) {
    if (!map.has(pattern[i])) map.set(pattern[i], words[i]);
    else {
      if (map.get(pattern[i]) !== words[i]) return false;
    }
  }
  return true;
}
