// https://www.hackerrank.com/challenges/construct-the-array/problem

const modVal = 1_000_000_000 + 7;

function countArray(n, k, x) {
  let result = 1;
  let numberOfXs = 0;
  const xCountStart = x === 1 ? 2 : 1;
  for (let i = 2; i < n; i++) {
    if (i > xCountStart) {
      numberOfXs = result - numberOfXs;
    }
    result = result * (k - 1);
    if (i === n - 1) {
      result -= numberOfXs;
    }
    result = result % modVal;
    numberOfXs = numberOfXs % modVal;
  }
  return result;
}

console.log(countArray(100000, 100000, 1));
