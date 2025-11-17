async function getValueUntilGreaterThanTen(fetchFn: () => number): void {
  let result = 0;
  while (result <= 10) {
    result = await fetchFn();
    console.log(result);
  }
}

const fetchFn: () => number = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(Math.floor(Math.random() * 20)), 1000);
  });
};
getValueUntilGreaterThanTen(fetchFn);
