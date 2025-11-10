function partition(arr, fn) {
  const pass1 = [],
    pass2 = [];
  arr.map((item) => {
    if (fn(item)) pass1.push(item);
    else pass2.push(item);
  });
  return [pass1, pass2];
}
console.log(partition([1, 2, 3, 4], (x) => x % 2 === 0));
console.log(partition([2, 4, 5, 6, 7, 9], (x) => x > 6));
