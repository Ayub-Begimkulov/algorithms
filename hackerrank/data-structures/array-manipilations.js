// https://www.hackerrank.com/challenges/crush/problem

// the more efficient way of doing this
// is just marking the start as `val` and end as `-val`
// then iterate thorough array calculating it's sum
// and the max sum will be the answer, current sum
// at any index will be the same as value for this index
function arrayManipulation(n, queries) {
  const arr = Array(n + 1).fill(0);
  queries.forEach(query => {
    // arr `start` and `end` are for 1-index based arrays
    // subtract - 1 from indexes
    const [start, end, val] = query;
    arr[start - 1] += val;
    arr[end] -= val;
  });
  let max = 0;
  let sum = 0;
  arr.forEach(v => {
    sum += v;
    max = Math.max(sum, max);
  });
  return max;
}

function arrayManipulationSimple(n, queries) {
  const arr = Array(n);
  let max = -Infinity;
  queries.forEach(query => {
    const [start, end, val] = query;
    // arr `start` and `end` are for 1-index based arrays
    // subtract - 1 from indexes
    for (let i = start - 1; i < end; i++) {
      if (typeof arr[i] !== "number") {
        arr[i] = 0;
      }
      arr[i] += val;
      max = Math.max(max, arr[i]);
    }
  });
  return max;
}

const sample = [
  [1, 2, 3],
  [4, 5, 7],
  [7, 8, 1],
];

console.log(arrayManipulation(10, sample));
