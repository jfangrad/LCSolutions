/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
  let current = head;
  const nodeArray = [];

  while(!!current){
    nodeArray.push(current);
    current = current.next
  }

  const length = nodeArray.length;

  if (n === length) return head.next;

  nodeArray[length - n - 1].next = nodeArray[length - n + 1]

  return head;
};
