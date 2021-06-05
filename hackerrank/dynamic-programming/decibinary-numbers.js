// https://www.hackerrank.com/challenges/decibinary-numbers/problem

/* 

0

1

2
10

3
11

4
12
20
100

5
13
21
101

6
14
22
30
102
110

7
15
23
31
103
111

===
8
===
8
16
24
32
104
112
120
200
1000
40

9
17
25
33
105
113
121
201
1001

===
10
===
18
42
1002
1010
202
210

50

26
34
122
106
114
130


2,8
4,6

*/

let list = [];

function initListTillN(n) {
  for (let i = list.length; i < n; i++) {
    list[i] = i;
  }
  list.sort(compareDecibinary);
}

initListTillN(10_000);

function compareDecibinary(a, b) {
  const aDecimalValue = getDecimalValue(a);
  const bDecimalValue = getDecimalValue(b);
  const result = aDecimalValue - bDecimalValue;
  if (result === 0) {
    return a - b;
  }
  return result;
}

function getNumberOfWays(n) {
  if (n < 2) return 1;
  let results = 0;
  if (n < 10) {
    results++;
  }
}

console.log(getNumberOfWays(0) === 1);
console.log(getNumberOfWays(1) === 1);
console.log(getNumberOfWays(2) === 2);
console.log(getNumberOfWays(3) === 2);
console.log(getNumberOfWays(4) === 4);

function getDecimalValue(num) {
  let current = num;
  let result = 0;
  while (current > 0) {
    const digits = Math.floor(Math.log10(current));
    const divider = Math.pow(10, digits);
    const firstDigit = Math.floor(current / divider);
    result += firstDigit * Math.pow(2, digits);
    current = current % divider;
  }
  return result;
}

function decibinaryNumbers(n) {
  const value = n - 1;
  if (typeof list[value] === "number") return list[value];
  return list[value];
}
