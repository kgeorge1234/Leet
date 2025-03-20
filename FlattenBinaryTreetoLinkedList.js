function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right === undefined ? null : right)
    
}


var flatten = function (root) {
  
    let prev = null;

    function helper(node) {
        if (node != null) {
            helper(node.right);
            helper(node.left);

            node.right = prev;
            node.left = null;
            prev = node;
        }
        return;
    }

    helper(root);
};
let seven = new TreeNode(7, null, null);
let five = new TreeNode(5, null, null);
let four = new TreeNode(4, null, null);
let three = new TreeNode(3, null, seven);
let two = new TreeNode(2, four, five);
let one = new TreeNode(1, two, three);

let x = pathSum(three,18);
console.log(x);