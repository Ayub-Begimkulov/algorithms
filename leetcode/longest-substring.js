// '', 'a', 'aaaaa', 'bab'

function lengthOfLongestSubstring(string) {
  const seen = new Set();
  let left = 0;
  let right = 0;
  let max = 0;
  while (right < string.length) {
    if (!seen.has(right)) {
      max = Math.max(max, right - left + 1);
      seen.add(string[right]);
      right++;
    } else {
      seen.delete(string[left]);
      left++;
    }
  }
  return max;
}

function lengthOfLongestSubstring2(string) {
  let max = 0;
  let currentMax = 0;
  let map;
  for (let i = 0, l = string.length; i < l; i++) {
    map = new Map();
    currentMax = 0;
    if (l - i < currentMax) break;
    for (let j = i; j < l; j++) {
      const currentChar = string[j];
      if (map.has(currentChar)) {
        break;
      }
      map.set(currentChar);
      currentMax++;
    }
    max = Math.max(currentMax, max);
  }
  return max;
}
