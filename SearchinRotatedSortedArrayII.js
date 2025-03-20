/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    let mid = 0;

    while (left < right) {
        mid = left + Math.floor((right - left) / 2);

        if (nums[mid] > nums[right])
            left = mid + 1;
        else
            right = mid;
    }

    start = left;
   
    left = 0;
    right = nums.length - 1;

    
    if (target >= nums[start] && target <= nums[right])
        left = start;
    else
    right = start;

    while (left <= right) {
        mid = left + Math.floor((right - left) / 2);
        
        if (nums[mid] == target)
            return true;
        else if (nums[mid] > target)
            right = mid - 1;
        else
            left = mid + 1;
    }

    return false;
};

let x = search([1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,1,1,1,1], 2);
console.log(x);