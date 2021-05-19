// https://www.hackerrank.com/challenges/equal/problem

// adding chocolates to all but one
// is equivalent to subtracting from one
// there for we would count how many times we
// have to subtract from all numbers to get to [min, min-4]
// because min - 5 would never be with less operations since
// we just add additional operation to everything
function equal(arr) {
  const min = Math.min.apply(Math, arr);
  let finalResult = Infinity;
  for (let i = 0; i <= 4; i++) {
    let currentResult = 0;
    arr.forEach(item => {
      const target = item - min + i;
      // number of 5s
      currentResult += Math.floor(target / 5);
      // number of 2s from remaining
      currentResult += Math.floor((target % 5) / 2);
      // number of 1s from remaining
      currentResult += Math.floor((target % 5) % 2);
    });
    finalResult = Math.min(currentResult, finalResult);
  }
  return finalResult;
}
