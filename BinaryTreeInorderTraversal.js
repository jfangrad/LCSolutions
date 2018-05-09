/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
  const array = [];
  traverse(root, array);
  return array;
};

const traverse = (node, arr) => {
  if(!node) return;

  if (node.left) {
    traverse(node.left, arr);
  }

  arr.push(node.val)

  if (node.right) {
    traverse(node.right, arr);
  }
};
