/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    let lastgoodindex = nums.length - 1;

    if (nums.length == 1)
        return true;

    for (let i = nums.length - 2; i >= 0; i--){
        if (i + nums[i] >= lastgoodindex)
            lastgoodindex = i;
    }

    if (lastgoodindex == 0)
        return true;
    else
        return false;

};

let x = canJump([3,2,1,0,4]);
console.log(x);