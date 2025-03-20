function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

var buildTree = function(preorder, inorder) {
    let preorderIndex = 0;
    return helper(preorder, inorder, 0, inorder.length - 1);
   
    function helper(preorder, inorder, start, end) {
        if (preorderIndex >= preorder.length)
            return null;
       
        let root = new TreeNode(preorder[preorderIndex]);

        let index = findIndex(inorder, start, end, root.val);

        if (index == -1)
            return null;

        preorderIndex++;

        root.left = helper(preorder, inorder, start, index - 1);
        root.right = helper(preorder, inorder, index + 1, end);

        return root;
        
    }
    
    function findIndex(inorder, start, end, num) {
        while (start <= end) {
            if (inorder[start] == num)
                return start;

            start++;
        }

        return -1;
    }
};

let x = buildTree([3, 9, 20, 15, 7], [9, 3, 15, 20, 7])
console.log(x);