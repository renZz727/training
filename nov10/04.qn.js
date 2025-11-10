function once(fn) {
  let count = 0;
  function newFun() {
    if (count !== 0) return;
    fn();
    count++;
  }
  return newFun;
}

const initialized = once(() => console.log("Initialized"));
initialized();
initialized();

let initializ = once(() => console.log("hi"));
initializ();
