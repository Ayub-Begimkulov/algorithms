// https://www.hackerrank.com/challenges/kundu-and-tree/problem?isFullScreen=true

const mod = 10 ** 9 + 7;

function processData(input) {
  //Enter your code here
  input = input
    .split("\n")
    .slice(1)
    .map(line =>
      line.split(" ").map(v => {
        const parsed = parseInt(v, 10);
        if (Number.isNaN(parsed)) return v;
        return parsed;
      })
    );
  return findAllPaths(input);
}

function findAllPaths(paths) {
  const graph = new Map();
  paths.forEach(([start, end, color]) => {
    graph.set(start, { to: end, color });
  });
  const first = paths[0][0];
  return getRedPaths(first, graph);
}

function getRedPaths(from, graph) {
  let result = 1;
  const current = graph.get(from);
  if (!current) return result;
  const { color, to } = current;
  result = (result + getRedPaths(to, graph)) % mod;
  return result;
}

console.log(
  processData(
    `5
1 2 b
2 3 r
3 4 r
4 5 b`
  )
);
