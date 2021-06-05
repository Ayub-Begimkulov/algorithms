// https://www.hackerrank.com/challenges/non-divisible-subset/problem

function nonDivisibleSubset(k, s) {
  const modToCountMap = new Map();
  s.forEach(item => {
    const mod = item % k;
    let count = modToCountMap.get(mod) || 0;
    modToCountMap.set(mod, count + 1);
  });
  let max = 0;
  const seenMods = new Set();
  modToCountMap.forEach((count, mod) => {
    if (mod === 0 || mod === k / 2) {
      // we can add only 1 number with mod - `0` or `k / 2`
      // because if we add more, we'd have a pair
      // that evenly divides by `k`
      max++;
      return;
    }
    const conflictMod = k - mod;
    if (seenMods.has(conflictMod)) {
      const overlapCount = modToCountMap.get(conflictMod);
      if (overlapCount < count) {
        seenMods.delete(conflictMod);
        seenMods.add(mod);
        max = max - overlapCount + count;
      }
    } else {
      max += count;
      seenMods.add(mod);
    }
  });
  return max;
}

console.log(nonDivisibleSubset(4, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
