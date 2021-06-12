function queensAttack(n, k, rq, cq, obstacles) {
  const obstaclesMap = buildObstaclesMap(obstacles);
  let result = 0;
  for (let row = rq - 1; row <= rq + 1; row++) {
    for (let col = cq - 1; col <= cq + 1; col++) {
      if (col === cq && row === rq) continue;
      const routeResult = checkRoute(
        row,
        col,
        row - rq,
        col - cq,
        n,
        obstaclesMap
      );
      console.log(routeResult);
      result += routeResult;
    }
  }
  return result;
}

function buildObstaclesMap(obstacles) {
  const map = new Map();
  for (let i = 0; i < obstacles.length; i++) {
    const [row, col] = obstacles[i];
    map.set(`${row}${col}`, true);
  }
  return map;
}

function checkRoute(row, col, rowInc, colInc, boardSize, obstaclesMap) {
  let result = 0;
  while (row <= boardSize && col <= boardSize && row >= 1 && col >= 1) {
    if (obstaclesMap.has(`${row}${col}`)) return result;
    result++;
    row += rowInc;
    col += colInc;
  }
  return result;
}

/* 
5|-|-|-|-|o|
4|-|o|q|-|-|
3|-|-|-|-|-|
2|-|-|-|-|-|
1|-|-|-|-|-|
  1 2 3 4 5
*/

console.log(
  queensAttack(5, 3, 4, 3, [
    [5, 5],
    [4, 2],
    [4, 3],
  ])
);
