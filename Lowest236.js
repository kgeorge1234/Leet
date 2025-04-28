function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}


/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
  
    if (root == null)
        return null;

    if (root.val == p.val || root.val == q.val)
        return root;

    if (root.left == null && root.right == null)
        return null;

    let left = lowestCommonAncestor(root.left, p, q);
    let right = lowestCommonAncestor(root.right, p, q);

    if (left != null && right != null)
        return root;

    return (left == null ? right : left);
};

let eight = new TreeNode(8, null, null);
let zero = new TreeNode(0, null, null);
let one = new TreeNode(1, zero, eight);
let four = new TreeNode(4, null, null);
let seven = new TreeNode(7, null, null);
let two = new TreeNode(2, seven, four);
let six = new TreeNode(6, null, null);
let five = new TreeNode(5, six, two);
let three = new TreeNode(3, five, one);

let x = lowestCommonAncestor(three, two, four);
console.log(x);