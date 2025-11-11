function series() : number {
  let sum = 0;
  for (let i = 1; i <= 1000; i++) {
      sum += Math.pow(i, i);
  }
  return sum % 10000000000;
}

series();