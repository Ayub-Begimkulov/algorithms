// TODO solve this with better performance
// https://leetcode.com/problems/longest-palindromic-substring/submissions/

function longestPalindrome(string: string): string {
  const l = string.length;
  let start = 0;
  const matrix = Array.from({ length: l }, () =>
    Array.from({ length: l }, () => 0)
  );
  let max = 1;
  for (let i = 0; i < l; i++) {
    matrix[i][i] = 1;
  }
  for (let i = 0; i < l - 1; i++) {
    if (string[i] === string[i + 1]) {
      matrix[i][i + 1] = 1;
      max = 2;
      start = i;
    }
  }
  for (let palindromeLength = 3; palindromeLength <= l; palindromeLength++) {
    for (let i = 0; i < l - palindromeLength + 1; i++) {
      let endIdx = i + palindromeLength - 1;
      if (matrix[i + 1][endIdx - 1] === 1 && string[i] === string[endIdx]) {
        matrix[i][endIdx] = 1;
        if (palindromeLength > max) {
          start = i;
          max = palindromeLength;
        }
      }
    }
  }
  return string.substr(start, max);
}

let test = [
  //b a  b  a  d
  [1, 0, 1, 0, 0], // b
  [0, 1, 0, 1, 0], // a
  [0, 0, 1, 0, 0], // b
  [0, 0, 0, 1, 0], // a
  [0, 0, 0, 0, 1], // d
];
