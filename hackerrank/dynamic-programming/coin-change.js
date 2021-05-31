// https://www.hackerrank.com/challenges/coin-change/problem

function getWays(amount, coins, index = 0, cache = new Map()) {
  const cacheIdx = `${amount}_${index}`;
  const cachedValue = cache.get(cacheIdx);
  if (typeof cachedValue === "number") return cachedValue;
  let result = 0;
  for (let i = index, l = coins.length; i < l; i++) {
    const diff = amount - coins[i];
    if (diff === 0) {
      result += 1;
    } else if (diff > 0) {
      // passing `i` to `getWays` recursively
      // so it doesn't use prev coins to generate result
      // since we already covered all possible options with
      // them previously
      result += getWays(diff, coins, i, cache);
    }
  }
  cache.set(cacheIdx, result);
  return result;
}
