function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}
/**
 * @param {TreeNode} root
 * @return {number}
 */
var countNodes = function(root) {
    if (root == null)
        return 0;
    let left = 0, right = 0;
    let leftCur = root;

    while (leftCur) {
        leftCur = leftCur.left;
        left++;
    }

    let rightCur = root;

    while (rightCur) {
        rightCur = rightCur.right;
        right++;
    }

    if (left == right) {
        return Math.pow(2, left) - 1;
    }

    return (1 + countNodes(root.left) + countNodes(root.right));

};

let six = new TreeNode(6, null, null);
let five = new TreeNode(5, null, null);
let four = new TreeNode(4, null, null);
let three = new TreeNode(3, six, null);
let two = new TreeNode(2, four, five);
let one = new TreeNode(1, two, three);

let x = countNodes(one)
console.log(x);