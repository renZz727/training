function functionCompositionFn(functions, num) {
  let func;
  function fnComposition(value = num) {
    if (functions.length === 0) return value;
    for (let i = functions.length - 1; i >= 0; i--) {
      func = functions[i];
      value = func(value);
    }
    return value;
  }
  return fnComposition;
}

const fn = functionCompositionFn([(x) => x + 1, (x) => x * x, (x) => 2 * x], 4);
console.log(fn()); // 65
console.log(fn(4)); // 65
console.log(fn(5)); // 101
