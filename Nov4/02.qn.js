function functionCompositionFn(functions, num) {
  if (functions.length === 0) return num;
  let value = num;
  let func;
  for (let i = functions.length - 1; i >= 0; i--) {
    func = functions[i];
    value = func(value);
  }
  return value;
}

console.log(
  functionCompositionFn([(x) => x + 1, (x) => x * x, (x) => 2 * x], 4)
);
console.log(functionCompositionFn([(x) => 2 * x, (x) => 10, (x) => x - 1], 3))