// https://www.hackerrank.com/challenges/sherlock-and-cost/problem

function cost(b) {
  let high = 0;
  let low = 0;
  let prev = b[0];
  for (let i = 1; i < b.length; i++) {
    const loLo = 0;
    const loHi = Math.abs(b[i] - 1);
    const hiLo = Math.abs(b[i - 1] - 1);
    const hiHi = Math.abs(b[i - 1] - b[i]);

    const newLoSum = Math.max(low + loLo, high + hiLo);
    const newHiSum = Math.max(low + loHi, high + hiHi);
    low = newLoSum;
    high = newHiSum;
    prev = b[i];
  }
  return Math.max(high, low);
}
