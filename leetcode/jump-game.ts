// https://leetcode.com/problems/jump-game/submissions/

function canJump2(nums) {
  const length = nums.length;
  if (length < 2) return true;
  let maxLen = 0;
  for (let i = 0; i <= maxLen; i++) {
    maxLen = Math.max(maxLen, i + nums[i]);
    if (maxLen >= length - 1) {
      return true;
    }
  }
  return false;
}

function canJump(nums: number[]) {
  const length = nums.length;
  if (length < 2) return true;
  for (let i = 0, l = length; i < l; i++) {
    if (nums[i] === 0) {
      if (!canEscape(nums, i, i === length - 1)) {
        return false;
      }
    }
  }
  return true;
}

function canEscape(nums: number[], index: number, isLast: boolean) {
  let diff = isLast ? 1 : 2;
  for (let i = index - 1; i >= 0; i--) {
    if (nums[i] >= diff) {
      return true;
    }
    diff++;
  }
  return false;
}
