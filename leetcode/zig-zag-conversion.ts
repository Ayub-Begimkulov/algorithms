// https://leetcode.com/problems/zigzag-conversion/
/* 

P   A   H   N
A P L S I I G
Y   I   R

*/

function convert(s: string, numRows: number): string {
  if (numRows === 1) return s;
  const res = Array(numRows).fill("");

  let isIncreasing = true;
  let row = 0;
  for (let i = 0; i < s.length; i++) {
    res[row] += s[i];
    if (row === 0) isIncreasing = true;
    if (row === numRows - 1) isIncreasing = false;
    row += isIncreasing ? 1 : -1;
  }

  return res.join("");
}
