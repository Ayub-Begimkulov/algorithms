/* 

  a s d f f d s a
a 1
s   1
d     1
f      1
f
d
s
a
*/

function longestPalindrome(string: string): string {
  const l = string.length;
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
    }
  }
  return "";
}
