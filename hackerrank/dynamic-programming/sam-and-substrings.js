// https://www.hackerrank.com/challenges/sam-and-substrings/problem

const modulo = 10 ** 9 + 7;

// function substrings(string, idx = 0, sum = 0) {
//   if (idx === string.length) return sum;
//   for (let i = idx + 1, l = string.length; i <= l; i++) {
//     // console.log(string.slice(idx, i));
//     sum += parseInt(string.slice(idx, i)) % modulo;
//   }
//   return substrings(string, idx + 1, sum);
// }

function substrings(string) {
  let sum = 0;
  let timesInSubstringGroup = 1;
  for (let i = string.length - 1; i >= 0; i--) {
    const currentNum = parseInt(string[i]);
    // substring group is a substrings which start with
    // the same number
    const substringGroupsWithCurrentNumber = i + 1;
    sum =
      (sum +
        currentNum * timesInSubstringGroup * substringGroupsWithCurrentNumber) %
      modulo;
    timesInSubstringGroup = (timesInSubstringGroup * 10 + 1) % modulo;
  }
  return sum;
}

// console.log(substrings2("12345"));
// console.log(
//   12345 + 1234 + 123 + 12 + 1 + 2345 + 234 + 23 + 2 + 345 + 34 + 3 + 45 + 4 + 5
// );

// ("12345");
// ("1234");
// ("123");
// ("12");
// ("1");
// ("2345");
// ("234");
// ("23");
// ("2");
// ("345");
// ("34");
// ("3");
// ("45");
// ("4");
// ("5");
