/**
 * Definition for a binary tree node.
 * 
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */

function TreeNode(val, left, right) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
     }
var inorderTraversal = function(root) {
    let result = [];
    inorderDfs(root, result);
    return result;

    function inorderDfs(root,result) {
        if (root === null)
            return;

        inorderDfs(root.left,result);
        result.push(root.val);
        inorderDfs(root.right,result);
    }
};

let three = new TreeNode(3, null, null);
let two = new TreeNode(2, three, null);
let one = new TreeNode(1, null, two);

let x = inorderTraversal(one);
console.log(x);