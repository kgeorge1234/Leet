function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

var sortedArrayToBST = function(nums) {
    
    return helper(nums, 0, nums.length - 1);

    function helper(nums, start, end) {
        
        if (start > end || start < 0 || end > nums.length - 1)
            return null;

        let mid = start + Math.floor((end - start) / 2);
        let root = new TreeNode(nums[mid]);

        root.left = helper(nums, start, mid - 1);
        root.right = helper(nums, mid + 1, end);

        return root;

    }
};

let x = sortedArrayToBST([-10, -3, 0, 5, 9]);
console.log(x);