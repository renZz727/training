export function findLongestChain(arr: number[]): Record<string, unknown> {
  const dp = Array(arr.length).fill(1);
  const prev = Array(arr.length).fill(-1);

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < i; j++) {
      if (arr[j] < arr[i] && dp[j] + 1 > dp[i]) {
        dp[i] = dp[j] + 1;
        prev[i] = j;
      }
    }
  }
  let maxIndex = 0;
  const result = [];
  for (let i = 1; i < dp.length; i++) {
    if (dp[i] > dp[maxIndex]) maxIndex = i;
  }

  while (maxIndex !== -1) {
    result.push(arr[maxIndex]);
    maxIndex = prev[maxIndex];
  }

  return {
    list: result.toReversed(),
    length: result.length,
  };
}
