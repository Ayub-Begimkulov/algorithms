// https://www.hackerrank.com/challenges/counting-valleys/problem

function countingValleys(steps, path) {
  let currentAltitude = 0;
  let isInValley = false;
  let valleysCount = 0;
  for (let i = 0; i < steps; i++) {
    const current = path[i];
    currentAltitude += current === "D" ? -1 : 1;
    if (currentAltitude < 0 && !isInValley) {
      isInValley = true;
      valleysCount++;
    }
    if (currentAltitude === 0 && isInValley) {
      isInValley = false;
    }
  }
  return valleysCount;
}

console.log(countingValleys(8, "UDDDUDUU".split("")));
