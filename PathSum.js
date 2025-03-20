function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}


var hasPathSum = function(root, targetSum) {
    if (root == null)
        return false;

    if (root.left == null && root.right == null && targetSum - root.val == 0)
        return true;
    
    if (root.left == null && root.right == null && targetSum - root.val != 0)
        return false;

    if (root.left != null && root.right == null) 
        return hasPathSum(root.left, targetSum - root.val)
    
    if (root.right != null && root.left == null) 
        return hasPathSum(root.right, targetSum - root.val)

    return hasPathSum(root.left, targetSum - root.val) || hasPathSum(root.right, targetSum - root.val);
        
};


let seven = new TreeNode(7, null, null);
let fifteen = new TreeNode(15, null, null);
let twenty = new TreeNode(20, fifteen, seven);
let nine = new TreeNode(9, null, null);
let three = new TreeNode(3, nine, twenty);

let x = hasPathSum(three,18);
console.log(x);