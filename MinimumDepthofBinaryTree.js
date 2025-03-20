function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

var minDepth = function (root) {
    
    if (root == null)
        return 0;
    
    return minimunHeight(root);
   
    function minimunHeight(root) {
        if (root.left == null && root.right == null)
            return 1;

        let leftMin = root.left != null ? minimunHeight(root.left): Number.MAX_SAFE_INTEGER
        let rightMin = root.right != null ? minimunHeight(root.right): Number.MAX_SAFE_INTEGER;

        return 1 + Math.min(leftMin, rightMin);
    }
};

let seven = new TreeNode(7, null, null);
let fifteen = new TreeNode(15, null, null);
let twenty = new TreeNode(20, fifteen, seven);
let nine = new TreeNode(9, null, null);
let three = new TreeNode(3, nine, twenty);

let x = minDepth(three);
console.log(x);