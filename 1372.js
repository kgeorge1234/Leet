function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

var longestZigZag = function(root) {
    let maxVal = 0;

    helper(root, 1,0 );
    helper(root, -1,0);

    return maxVal;
    
    function helper(root, direction, count){
        if(root == null)
            return;
       
        maxVal = Math.max(maxVal, count);

        if(direction == -1){
            helper(root.right, 1, count+1);
            helper(root.left, -1, 1);
        }
        else{
            helper(root.left, -1, count+1);
            helper(root.right, 1, 1);
        }

    }
};

let one = new TreeNode(1, null, null);
let two = new TreeNode(2, null, one);
let three = new TreeNode(3, null, two);
let five = new TreeNode(5, null, null);
let four = new TreeNode(4, three, five);
let seven = new TreeNode(7, null, null);
let six = new TreeNode(6, seven, four);
let eight = new TreeNode(8, null, six);

let x = longestZigZag(eight)
console.log(x);