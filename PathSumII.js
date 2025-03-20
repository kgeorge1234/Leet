function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}


var pathSum = function(root, targetSum) {
    
    let result = [];

    helper(root, targetSum, []);

    return result;

     function helper(root, targetSum, arr){
         if (root == null)
             return null;
         
         arr.push(root.val);
         
         if (root.left == null && root.right == null && root.val - targetSum == 0)
             result.push([...arr]);
         
         helper(root.left, targetSum - root.val, arr);
         helper(root.right, targetSum - root.val, arr);
         
         arr.pop();
    }
};

let seven = new TreeNode(7, null, null);
let fifteen = new TreeNode(15, null, null);
let twenty = new TreeNode(20, fifteen, seven);
let nine = new TreeNode(9, null, null);
let three = new TreeNode(3, nine, twenty);

let x = pathSum(three,18);
console.log(x);