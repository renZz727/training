export function frequencySort(arr: number[]): number[] {
  const freq: {} = {};
  for (const num of arr) {
    freq[num] = (freq[num] | 0) + 1;
  }
  arr.sort((a, b) => b - a);
  const sorted = arr.sort((a, b) => {
    if (freq[a] < freq[b]) return 1;
    else if (freq[a] > freq[b]) return -1;
    return 0;
  });
  sorted.sort((a, b) => {
    if (freq[a] === freq[b] && a < b) return -1;
    else if (freq[a] === freq[b] && a > b) return 1;
    return 0;
  });
  return sorted;
}
