// https://www.hackerrank.com/challenges/encryption/problem

function encryption(s) {
  // Write your code here
  const noSpaceString = s.replace(/\s/g, "");
  const length = noSpaceString.length;
  const sqrt = Math.sqrt(length);
  const [rows, columns] = [Math.floor(sqrt), Math.ceil(sqrt)];
  const arr = Array.from({ length: columns }, () => Array(rows));
  // const arr2 = Array(columns * rows);
  for (let i = 0; i < length; i++) {
    const row = Math.floor(i / columns);
    const col = i % columns;
    // swap the col and row
    arr[col][row] = noSpaceString[i];
    // arr2[rows * col + row] = noSpaceString[i];
  }
  // console.log(arr2.join(""));
  return arr.map(row => row.join("")).join(" ");
}

console.log(encryption("haveaniceday"));
