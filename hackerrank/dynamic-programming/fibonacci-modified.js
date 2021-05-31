// https://www.hackerrank.com/challenges/fibonacci-modified/problem

function fibonacciModified(t1, t2, n) {
  if (n === 2) return t2;
  const newT2 = t1 + t2 ** 2;
  return fibonacciModified(t2, newT2, n - 1);
}
