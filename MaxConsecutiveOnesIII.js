/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function(nums, k) {
    let count = 0;
    let maxVal = 0;
    let left = 0;
    let zeroCount = 0;

    for (let i = 0; i < nums.length; i++){
        if (nums[i] == 0) {
            zeroCount++;
        }
        
        count++;

        if (zeroCount > k) {
            while (nums[left] != 0) {
                count--;
                left++;
            }

            zeroCount = k;
            count--;
            left++;
        }

        maxVal = Math.max(maxVal, count);
            

    }

    return maxVal;
};

let x = longestOnes([1,1,1,0,0,0,1,1,1,1,0], 2);
console.log(x);