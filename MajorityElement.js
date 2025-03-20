/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let counts = new Map();
    let temp = 0;
    let majoritycount = Number.MIN_SAFE_INTEGER;
    let majority = nums[0];

    for (let i = 0; i < nums.length; i++){
        if (counts.get(nums[i])) {
            temp = counts.get(nums[i]);
            temp++;
            if (temp >= majoritycount) {
                majority = nums[i];
                majoritycount = temp;
            }
            counts.set(nums[i], temp);
        }
        else
            counts.set(nums[i], 1);
    }
    return majority;
};

let x = majorityElement([6,6,6,7,7]);
console.log(x);