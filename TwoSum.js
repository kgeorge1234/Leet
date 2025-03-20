var twoSum = function(nums, target) {
    let dict = {};
    let result = [];

    for (let i = 0; i < nums.length; i++)
    {
        if (nums[i] in dict) {
            result[0] = dict[nums[i]];
            result[1] = i;
            break;
        }
        else {
            dict[target - nums[i]] = i;
        }
        
    }
    return result;
};
console.log(twoSum([3,3], 6));