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
 * @param {number} targetSum
 * @return {number}
 */
//coding decoded
var pathSum = function(root, targetSum) {
    let count = 0

    if(root == null)
        return count;
    
    postorder(root, targetSum);
    return count;

    function postorder(node, sum){
        if(node == null)
            return new Array();

        let leftList = postorder(node.left, sum);
        let rightList = postorder(node.right, sum);

        let currList = [];

        for(let val of leftList){
            currList.push(val + node.val);
        }

        for(let val of rightList){
            currList.push(val + node.val);
        }

        currList.push(node.val);

        for(let val of currList){
            if(val == sum)
                count++;
        }

        return currList;
    }
};