function minSubArrayLen(target: number, numbers: number[]) {
  let minLength = Infinity;
  let currentSum = 0;
  let currentLength = 0;
  let start = 0;
  let end = 0;
  const l = numbers.length - 1;
  while (end <= l || (start <= l && currentSum >= target)) {
    if (currentSum < target) {
      currentSum += numbers[end];
      end++;
      currentLength++;
    } else {
      currentSum -= numbers[start];
      currentLength--;
      start++;
    }
    if (currentSum >= target) {
      minLength = Math.min(minLength, currentLength);
    }
  }
  return isFinite(minLength) ? minLength : 0;
}
