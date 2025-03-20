/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */

function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

var generateTrees = function(n) {
    return helper(1, n);

    function helper(start, end) {
        let result = [];

        if (start > end) {
            result.push(null);
            return result;
        }

        if (start == end) {
            result.push(new TreeNode(start))
            return result;
        }

        for (let i = start; i <= end; i++){
            let leftTrees = helper(start, i - 1);
            let rightTrees = helper(i + 1, end);
          
            for (let lRoot of leftTrees) {
                for (let rRoot of rightTrees) {
                    let root = new TreeNode(i);
                    root.left = lRoot;
                    root.right = rRoot;
                    result.push(root);
                }
            }
        }

        return result;
    }
};

let x = generateTrees(5);
console.log(x);