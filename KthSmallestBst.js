class TreeNode {
    constructor(val, left, right) {
        this.val = (val === undefined ? 0 : val);
        this.left = (left === undefined ? null : left);
        this.right = (right === undefined ? null : right);
    }
}
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    
    let counter = 0;
    let result = 0;

    if(root == null)
    return null;

    function inorder(root,k){

        if(root.left)
             inorder(root.left,k)

        counter++;

        if (counter == k) {
            
            result = root.val;
            return;
        }

        if(root.right)
            inorder(root.right,k);

    }

    inorder(root, k);
    return result;

};


let four = new TreeNode(4, null, null);
let two = new TreeNode(2, null, null);
let one = new TreeNode(1, null, two);
let three = new TreeNode(3, one, four);

let x = kthSmallest(three,1);
console.log(x);