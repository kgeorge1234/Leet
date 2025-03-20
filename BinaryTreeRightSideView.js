function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function(root) {
    let result = [];
    let tempNode;
    let queue = [];
    if (root == null)
        return result;

    queue.push(root);

    let size = 0;

    while (queue.length != 0) {
        size = queue.length;

        for (let i = 0; i < size; i++){
            tempNode = queue.shift();
            if (i == 0)
                result.push(tempNode.val);

            if (tempNode.right)
                queue.push(tempNode.right);

            if (tempNode.left)
                queue.push(tempNode.left);
            
        }
    }

    return result;
};

let four = new TreeNode(4, null, null);
let three = new TreeNode(3, null, four);
let five = new TreeNode(5, null, null);
let two = new TreeNode(2, null, five);
let one = new TreeNode(1, two, three);

let x = rightSideView(one);
console.log(x);