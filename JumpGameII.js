/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    let left = 0;
    let right = 0;

    let destination = nums.length - 1;
    let maxval = 0;
    let jumpcount = 0;
    
    if (nums.length == 1)
        return 0;

    while (maxval < destination) {
        
        for (let i = left; i <= right; i++){
            maxval = Math.max(maxval, i + nums[i]);
        }
        
        left = right + 1;
        right = maxval;
        jumpcount++;
    }
    
    return jumpcount;
};

let x = jump([4,1,1,3,1,1,1]);
console.log(x);