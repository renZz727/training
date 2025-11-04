function createCounterFn(n) {
  let count = n - 1;
  function counter() {
    count++;
    console.log(count);
  }
  return counter;
}
let count = createCounterFn(3);
count();
count();
count();
