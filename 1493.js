/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function(nums) {
    let count = 0;
    let maxVal = 0;
    let left = 0;
    let zeroCount = 0;

    for (let i = 0; i < nums.length; i++){
        if (nums[i] == 0) {
            zeroCount++;
        }
        
        count++;

        if (zeroCount > 1) {
            while (nums[left] != 0) {
                count--;
                left++;
            }

            zeroCount = 1;
            count--;
            left++;
        }

        maxVal = Math.max(maxVal, count);          

    }

    return maxVal - 1;
};

let x = longestSubarray([0, 1, 1, 1, 0, 1, 1, 0, 1]);
