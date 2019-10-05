function nthPrime(n) {
  if (n === 1) {
    return 2;
  }

  let prime = 3;

  loop: while (n - 2) {
    prime += 2;

    for (let j = 3; j < prime; j += 2) {
      if (prime % j === 0) {
        continue loop;
      }
    }
    n--;
  }

  return prime;
}

console.log(nthPrime(1000));

// works but it's inefficient
