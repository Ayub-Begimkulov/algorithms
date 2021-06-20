var addTwoNumbers = function (l1, l2) {
  let result = new ListNode();
  let current = result;
  let addition = 0;
  let hasMore = l1 || l2;

  while (hasMore) {
    const sum = getNodeValue(l1) + getNodeValue(l2) + addition;
    addition = Math.floor(sum / 10);
    current.val = sum % 10;

    l1 = l1 && l1.next;
    l2 = l2 && l2.next;

    hasMore = l1 || l2;
    if (hasMore) {
      current.next = new ListNode();
      current = current.next;
    }
  }
  if (addition) {
    current.next = new ListNode(addition);
  }
  return result;
};

function getNodeValue(node) {
  return (node && node.val) || 0;
}
