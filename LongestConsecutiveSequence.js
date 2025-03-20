/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    let numSet = new Set();
    if (nums.length == 0)
        return 0;

    let maxSequence = 0;
    let count = 0;
    let temp;

    for (let i = 0; i < nums.length; i++){
        numSet.add(nums[i]);
    }

    for (let i = 0; i < nums.length; i++){
        count = 1;
        if (!numSet.has(nums[i] - 1)) {
            temp = nums[i] + 1;
            while (numSet.has(temp)) {
                count++;
                temp++;
           }
        }
        maxSequence = Math.max(maxSequence, count);
    }

    return maxSequence;
};

let x = longestConsecutive([100, 4, 200, 1, 3, 2]);
console.log(x);