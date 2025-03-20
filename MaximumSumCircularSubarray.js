/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubarraySumCircular = function(nums) {
    let globalMax = nums[0];
    let globalMin = nums[0];
    let currMax = 0; let currMin = 0;
    let total = 0;

    for (let i = 0; i < nums.length; i++){
        currMax = Math.max(nums[i], currMax + nums[i]);
        currMin = Math.min(nums[i], currMin + nums[i]);
        total = total + nums[i];
        globalMax = Math.max(globalMax, currMax);
        globalMin = Math.min(globalMin, currMin);

    }

    if (globalMax > 0)
        return Math.max(globalMax, total - globalMin)
    else
        return globalMax;
};

let x = maxSubarraySumCircular([1, -2, 3, -2]);
console.log(x);