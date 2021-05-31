// function kingdomDivision(n, roads) {
//   const roadsGraph = new Map(Array.from({ length: n }, (_, i) => [i + 1, []]));
//   for (let i = 0; i < roads.length; i++) {
//     const [city1, city2] = roads[i];
//     addRoad(roadsGraph, city1, city2);
//     addRoad(roadsGraph, city2, city1);
//   }
//   return getAllPossibleDivisions(roadsGraph, roads);
// }

// class Tree {
//   constructor(value, ...children) {
//     this.children = children;
//     this.value = value;
//   }
// }

// function getAllPossibleDivisions(graph, roads, seen = new Set()) {
//   let result = 0;
//   for (let i = 0; i < roads.length; i++) {}
//   // roads.forEach((roads, node) => {
//   //   seen.add(node);
//   //   roads.forEach(r => {
//   //     result += getAllPossibleDivisions(graph, roads, seen);
//   //   });
//   // });
//   return result;
// }

// function addRoad(graph, city1, city2) {
//   let arr = graph.get(city1);
//   if (!arr) graph.set(city1, (arr = []));
//   arr.push(city2);
// }

// console.log(
//   kingdomDivision(5, [
//     [1, 2],
//     [1, 3],
//     [3, 4],
//     [3, 5],
//   ])
// );
