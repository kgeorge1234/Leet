/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
//techdose
var nextPermutation = function(nums) {
    
    if (nums.length == 1)
        return;

    let lastHighestPeak = -1;

    for (let i = 1; i < nums.length; i++){
        if (nums[i] > nums[i - 1])
            lastHighestPeak = i;
    }

    if (lastHighestPeak == -1) {
        let N = nums.length;
        for (let i = 0; i < Math.floor(N/2); i++){
            [nums[i], nums[N - i - 1]] = [nums[N - i - 1], nums[i]];
        }
        return;
    }

    let index = lastHighestPeak;

    for (let i = lastHighestPeak; i < nums.length; i++){
        if (nums[i] > nums[lastHighestPeak - 1] && nums[i] < nums[lastHighestPeak])
            index = i;
    }

    [nums[lastHighestPeak - 1], nums[index]] = [nums[index], nums[lastHighestPeak - 1]];

    let final = nums.slice(lastHighestPeak).sort((a, b) => a - b);

    nums.splice(lastHighestPeak, final.length, ...final);
};

let x = nextPermutation([5,4,7,5,3,2]);
console.log(x);