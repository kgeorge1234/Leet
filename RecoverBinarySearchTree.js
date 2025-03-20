/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */

function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

var recoverTree = function(root) {
    let prev = null;
    let one = null;
    let middle = null;
    let two = null;
    let temp = null;

    recoverTreeHelper(root);
    if (two != null) {
         temp = one.val;
        one.val = two.val;
        two.val = temp;
    }
    else
    {
        temp = one.val;
        one.val = middle.val;
        middle.val = temp;
    }

    function recoverTreeHelper(curr) {
        if (curr == null)
            return;

        recoverTreeHelper(curr.left);
        if (prev != null && prev.val > curr.val) {
            if (one == null) {
                one = prev;
                middle = curr;
            }
            else
                two = curr;
        }

        prev = curr;
        recoverTreeHelper(curr.right);
    }
};

