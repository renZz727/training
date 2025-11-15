// need to convert to BigInt
export function primeNumber(num: number): number {
  // num = BigInt(num);
  let count = 0;

  for (let i = 0; i <= num; i++) {
    if (isPrime(i)) count++;
  }
  return count;
}

function isPrime(num: number): boolean {
  // num = BigInt(num);
  if (num < 2) return false;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return true;
}

// console.log(primeNumber(10001));
