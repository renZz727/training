function combinations(n, k) {
  let result = [];
  let nums = [];

  for (let i = 1; i <= n; i++) {
    nums.push(i);
  }
  let backtrack = (path, start) => {
    if (path.length === k) {
      result.push([...path]);
    }

    for (let i = start; i < n; i++) {
      path.push(nums[i]);
      backtrack(path, i + 1);
      path.pop();
    }
  };

  backtrack([], 0);
  return result;
}

console.log(combinations(4, 2));
