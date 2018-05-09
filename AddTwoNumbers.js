/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

var addTwoNumbers = function(l1, l2) {
  const head = new ListNode(0);
  let result = head;
  let carry = 0;
  let prev = null;
  
  while (!!l1 || !!l2) {
    if (!!l2) {
      result.val = l2.val;
    }
    if(!!l1) {
      result.val += l1.val;
    }
    result.val += carry;

    if( result.val - 10 >= 0) {
      result.val = result.val - 10;
      carry = 1;
    } else {
      carry = 0;
    }
    
    if (!!l1) {
      l1 = l1.next;
    }
    if(!!l2) {
      l2 = l2.next;
    }
    result.next = new ListNode(0);
    prev = result;
    result = result.next;
  }
  
  if (carry === 1) {
    result.val = 1;
  } else {
    prev.next = null;
  }
  
  return head;
};