// https://www.hackerrank.com/challenges/components-in-graph/problem

function componentsInGraph(gb) {
  const graph = new Map();
  gb.forEach(([start, end]) => {
    const ways = graph.get(start) || [];
    ways.push(end);
    graph.set(start, ways);

    const ways2 = graph.get(end) || [];
    ways2.push(start);
    graph.set(end, ways2);
  });
  return getMinMax(graph);
}

function getMinMax(graph) {
  let min = Infinity;
  let max = -Infinity;
  const seen = new Set();

  for (const [start] of graph) {
    if (seen.has(start)) continue;
    const amount = getNumberOfConnectedNodes(start, graph, seen);
    min = Math.min(min, amount);
    max = Math.max(max, amount);
  }
  return [min, max];
}

function getNumberOfConnectedNodes(start, graph, seen) {
  let count = 0;
  // depth first search with stack
  const stack = graph.get(start).slice();
  while (stack.length > 0) {
    const el = stack.pop();
    if (seen.has(el)) {
      continue;
    }
    seen.add(el);
    // add current node
    count++;
    stack.push.apply(stack, graph.get(el));
  }
  // recursive solution
  // fails with big graphs
  // const paths = graph.get(start);
  // paths.forEach(p => {
  //   if (seen.has(p)) {
  //     return;
  //   }
  //   seen.add(p);
  //   // add current node
  //   count++;
  //   // add number of node of the current
  //   count += getNumberOfConnectedNodes(p, graph, seen);
  // });
  return count;
}

console.log(
  componentsInGraph([
    [1, 6],
    [2, 7],
    [3, 8],
    [4, 9],
    [2, 6],
  ])
);
