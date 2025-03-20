/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    
    let dp = new Array(nums.length).fill(1);

    dp[0] = 1;

    for (let i = 1; i < nums.length; i++){
        for (let j = i; j >= 0; j--){
            if (nums[j] < nums[i]) {
                dp[i] = Math.max(dp[i], 1 + dp[j]);
            }
        }
    }

    return Math.max(...dp);
};