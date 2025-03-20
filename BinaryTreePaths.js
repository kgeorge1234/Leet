function TreeNode(val, left, right) {
     this.val = (val===undefined ? 0 : val)
         this.left = (left===undefined ? null : left)
         this.right = (right===undefined ? null : right)
}

//solution from leetcode

var binaryTreePaths = function (root) {
    const paths = [];

    function dfs(node, path) {
        if (!node) return;
        path.push(node.val.toString());
        if (!node.left && !node.right) {
            paths.push(path.join('->'));
        } else {
            dfs(node.left, path.slice()); // Copy the path array
            dfs(node.right, path.slice()); // Copy the path array
        }
    }
    
    dfs(root, []);
    return paths;
};


let three = new TreeNode(3, null, null);
let five = new TreeNode(5, null, null);
let two = new TreeNode(2, null, five);
let one = new TreeNode(1, two, three);
let x = binaryTreePaths(one);
console.log(x);