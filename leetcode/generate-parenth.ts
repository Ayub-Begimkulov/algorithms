// https://leetcode.com/problems/generate-parentheses/

function generateParenthesis(amount: number) {
  const maxLength = amount * 2;
  const result = [];
  const stack = [];
  function generate(open: number, close: number) {
    if (close > open) return;
    if (close === open && stack.length === maxLength) {
      result.push(stack.join(""));
      return;
    }
    if (close < open) {
      stack.push(")");
      generate(open, close + 1);
      stack.pop();
    }
    if (open < amount) {
      stack.push("(");
      generate(open + 1, close);
      stack.pop();
    }
  }
  generate(0, 0);
  return result;
}
