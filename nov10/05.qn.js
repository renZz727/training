function functionCompositionFn(functions, num) {
  let func;
  function fnComposition(value = num) {
    if (functions.length === 0) return value;
    for (let i = functions.length - 1; i >= 0; i--) {
      func = functions[i];
    //   value = func(value);
      let promise = new Promise(function (resolve, reject) {
        setTimeout(() => resolve(func(value)), 1000);
      });
      promise.then((result) => value = result);
    
      //   console.log(value);
      // value = fun(value, func)
      //   async function fun(value, func) {
      //     let promise = new Promise((resolve, reject) => {
      //       setTimeout(() => {
      //         result = func(value);
      //         resolve(result);
      //       }, 1000);
      //     });
      //     result = await promise;
      //     return result;
      //   }
      //   value = fun(value, func);
    }
    return value;
  }
  return fnComposition;
}

const fn = functionCompositionFn([(x) => x + 1, (x) => x * 2], 4);
// console.log(fn()); // 65
// console.log(fn(4)); // 65
console.log(fn(3)); // 101
