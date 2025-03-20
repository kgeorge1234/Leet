function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

var isBalanced = function (root) {
    if (root == null)
        return true;

    let left = findheight(root.left);
    let right = findheight(root.right);

    return (Math.abs(left - right) <= 1 && isBalanced(root.left) && isBalanced(root.right))
     
    
    function findheight(root) {
        if (root == null)
            return 0;
        
        let leftHeight =  findheight(root.left);
        let rightHeight =  findheight(root.right);

        return 1+  Math.max(leftHeight, rightHeight);
    }
};

let seven = new TreeNode(7, null, null);
let fifteen = new TreeNode(15, null, null);
let twenty = new TreeNode(20, fifteen, seven);
let nine = new TreeNode(9, null, null);
let three = new TreeNode(3, nine, twenty);

let x = isBalanced(three);
console.log(x);