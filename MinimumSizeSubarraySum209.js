/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    let result = Number.MAX_SAFE_INTEGER;
    let runningSum = 0;
    let left = 0;

    for (let i = 0; i < nums.length; i++){
        
        runningSum += nums[i];

        while (runningSum >= target) {
            result = Math.min(result, i - left + 1);
            runningSum = runningSum - nums[left];
            left++;
        }

    }
    return (result != Number.MAX_SAFE_INTEGER) ? result : 0;
};

let x = minSubArrayLen(7, [2, 3, 1, 2, 4, 3]);
console.log(x);