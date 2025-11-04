function createCounterFn(n) {
  let count = n - 1;
  function counter() {
    count++;
    console.log(count);
  }
  return counter;
}

const counter1 = createCounterFn(3);
counter1();
counter1();
counter1();

const counter2 = createCounterFn(10);
counter2();
counter2();

counter1();
