/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let maxSum = nums[0];
    let currentSum = maxSum;

    for (let i = 1; i < nums.length; i++){
        currentSum = Math.max(currentSum + nums[i], nums[i]);
        maxSum = Math.max(currentSum, maxSum);
    }

    return maxSum;
};

let x = maxSubArray([1]);

console.log(x);