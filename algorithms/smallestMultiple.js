function smallestMult(n) {
  // make a array of 1 to n
  const arr = Array(n)
    .fill(0)
    .map((_, i) => i + 1);

  // create a table where we loop through array and prime factorize every number
  // ex: 6 => { '2': 1, '3': 1 }
  const table = arr.reduce((acc, num) => {
    const chart = {};
    let prime = 2;
    while (num >= prime) {
      if (num % prime === 0) {
        num /= prime;
        chart[prime] ? chart[prime]++ : (chart[prime] = 1);
      } else prime++;
    }
    return acc.concat([chart]);
  }, []);

  // get the most frequent occurrence from each num in each object
  const maxObj = table.reduce((acc, numObject) => {
    Object.keys(numObject).forEach(key => {
      if (!acc[key] || numObject[key] > acc[key]) {
        acc[key] = numObject[key];
      }
    });
    return acc;
  }, {});

  // multiply each object square by it's most frequent occurrence
  return Object.keys(maxObj).reduce(
    (acc, key) => (acc *= key ** maxObj[key]),
    1
  );
}

console.log(smallestMult(20));
