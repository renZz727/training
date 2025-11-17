async function timeOutWrapper(fn: (ms: number) => Promise<T>, ms: number) {
  try {
    const result = await fn(ms);
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}

const timeOutFn = (ms: number) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Takes longer time...");
    }, ms + 1000);
  });
};

timeOutWrapper(timeOutFn, 1000);
