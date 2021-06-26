// https://leetcode.com/problems/container-with-most-water/

// 20, 1, 1, 20, 1, 2

// you can't do better by moving a greater pointer
// so we always move a pointer with lesser value

function maxArea(height: number[]): number {
  const length = height.length;
  let rightIndex = length - 1;
  let leftIndex = 0;
  let maxArea = 0;
  while (leftIndex < rightIndex) {
    const left = height[leftIndex];
    const right = height[rightIndex];
    const currentArea = Math.min(left, right) * (rightIndex - leftIndex);
    maxArea = Math.max(currentArea, maxArea);
    if (left === right) {
      const nextLeft = height[leftIndex + 1];
      const nextRight = height[rightIndex - 1];
      if (nextLeft > nextRight) leftIndex++;
      else rightIndex--;
    } else if (left > right) {
      rightIndex--;
    } else {
      leftIndex++;
    }
  }
  return maxArea;
}
