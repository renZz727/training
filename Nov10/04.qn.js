const once = () => {
  let count = 0;
  function fn() {
    if (count === 0) console.log("Initialized");
    else return;
    count++;
  }
  return fn;
};
const initialized = once();
initialized();
initialized();
initialized();
