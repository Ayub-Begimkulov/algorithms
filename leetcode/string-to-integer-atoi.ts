// https://leetcode.com/problems/string-to-integer-atoi/submissions/

const digitsMap = new Map(
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(v => [v.toString(), v])
);

function isDigit(char: string) {
  return digitsMap.has(char);
}

function myAtoi(string: string) {
  let start = 0;
  for (let i = start, l = string.length; i < l; i++) {
    if (string[i] !== " ") {
      start = i;
      break;
    }
    if (i === l - 1) {
      return 0;
    }
  }
  let isNegative = false;
  if (string[start] === "-") {
    isNegative = true;
    start++;
  } else if (string[start] === "+") {
    start++;
  }
  let result: number[] = [];
  for (let i = start, l = string.length; i < l; i++) {
    if (!isDigit(string[i])) break;
    result.push(digitsMap.get(string[i]));
  }
  return convertToInteger(result, isNegative);
}

const MAX = 2 ** 31 - 1;
const MIN = (-2) ** 31;

function convertToInteger(digits: number[], isNegative: boolean) {
  const multiplier = isNegative ? -1 : 1;
  let magnitude = 0;
  let result = 0;
  for (let i = digits.length - 1; i >= 0; i--) {
    result += digits[i] * Math.pow(10, magnitude) * multiplier;
    if (result >= MAX) return MAX;
    if (result <= MIN) return MIN;
    magnitude++;
  }
  return result;
}
