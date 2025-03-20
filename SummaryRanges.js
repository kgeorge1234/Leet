/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
    let start = 0, end = 0;
    let result = [];

    if (nums.length <= 1)
        return nums.map(x => { return String(x) });

    let i = 1;

    while (i < nums.length){
        
        while ( i < nums.length && nums[i] == nums[i - 1] + 1) {
            i++;
        }

        if (i >= nums.length)
            break;

        end = i - 1;
        
        // grab start and end
        if (start == end)
            result.push(nums[start].toString())
        else
            result.push(nums[start] + "->" + nums[end]);

        start = i;
        i++;
    }
    
    end = i - 1;

    if (start == end)
        result.push(nums[start].toString())
    else
        result.push(nums[start] + "->" + nums[end]);
    

    return result;
};

let x = summaryRanges([0]);
console.log(x);