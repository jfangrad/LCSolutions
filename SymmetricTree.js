/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
  return checkSymmetric(root, root);
};

const checkSymmetric = (leftSide, rightSide) => {
  if (!leftSide && !rightSide) return true;
  if (!leftSide || !rightSide) return false;
  
  return ((leftSide.val === rightSide.val) &&
    checkSymmetric(leftSide.left, rightSide.right) &&
    checkSymmetric(leftSide.right, rightSide.left));
}
