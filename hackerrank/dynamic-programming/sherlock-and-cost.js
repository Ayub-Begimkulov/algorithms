// https://www.hackerrank.com/challenges/sherlock-and-cost/problem

// to achieve maximum result we always use
// max or min number, so what we can do
// is just go thorough each pair and check all
// 4 options, [prev, current] - [min, min],[min, max],[max,min],[max,max]
// 2 options with current min, 2 options current first max
// there for we need 2 accumulators, only one value with current max/min could
// be bigger. After we've finished we check which value is bigger and return it
function cost(b) {
  let high = 0;
  let low = 0;
  let prev = b[0];
  for (let i = 1; i < b.length; i++) {
    const loLo = 0; // 1 - 1
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
