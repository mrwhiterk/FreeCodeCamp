function largestPalindromeProduct(n) {
  let num = +'9'.repeat(n);
  let max = 0;

  let product = 1;
  for (let i = num; i >= 1; i--) {
    for (let j = i; j >= 1; j--) {
      product = i * j;
      if ([...product.toString()].reverse().join`` == product && product > max)
        max = product;
    }
  }
  return max;
}

console.log(largestPalindromeProduct(3));
