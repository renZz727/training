function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return true;
}

function findPrimes(num) {
  for (let i = num - 1; i >= 2; i--) {
    if (num % i === 0 && isPrime(i)) {
      return i;
    }
  }
}

console.log(findPrimes(13195));
// console.log(findPrimes(600851475143));
