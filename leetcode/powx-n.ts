function myPow(x: number, n: number) {
  if (n === 0) return 1;
  if (n === 1) return x;
  if (x === 1) return 1;
  if (x === -1) return n % 2 === 0 ? 1 : -1;
  let times = Math.abs(n) - 1;
  const neg = n < 0;
  let res = neg ? 1 / x : x;
  for (let i = 0; i < times; i++) {
    res = neg ? res / x : res * x;
  }
  return res;
}
