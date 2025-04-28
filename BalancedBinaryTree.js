function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

var isBalanced = function (root) {
    if (checkHeight(root) == -1)
        return false;
    else
        return true;

    function checkHeight(node) {
        if (node == null)
            return 0;

        let leftHeight = checkHeight(node.left);
        if (leftHeight == -1)
            return -1;

        let rightHeight = checkHeight(node.right);
        if (rightHeight == -1)
            return -1;

        if (Math.abs(leftHeight - rightHeight) > 1)
            return -1;

        return (1 + Math.max(leftHeight, rightHeight));
    }
};

let seven = new TreeNode(7, null, null);
let fifteen = new TreeNode(15, null, null);
let twenty = new TreeNode(20, fifteen, seven);
let nine = new TreeNode(9, null, null);
let three = new TreeNode(3, nine, twenty);

let x = isBalanced(three);
console.log(x);