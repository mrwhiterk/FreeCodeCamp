function largestPrimeFactor(number) {
  let prime = 2;
  let max = 1;

  while (prime <= number) {
    if (number % prime === 0) {
      max = prime;
      number /= prime;
    } else {
      prime++;
    }
  }
  return max;
}

console.log(largestPrimeFactor(600851475143));

