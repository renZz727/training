function subArrays(arr, size) {
  let result = [];
  let sub = [];
  let pos = 0;
  for (var i = size; i < arr.length; i = i + size) {
    sub = arr.slice(pos, i);
    pos += size;
    result.push(sub);
    sub = [];
  }
  if (arr.length % size !== 0) {
    let rem = i - 3;
    while (rem < arr.length) {
      sub.push(arr[rem]);
      rem++;
    }
    result.push(sub);
  }
  return result;
}

console.log(subArrays([1, 9, 6, 3, 2, 10, 32, 1, 10], 3));
