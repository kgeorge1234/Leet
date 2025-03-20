/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    if (nums.length == 0)
        return -1;

    let left = 0;
    let right = nums.length - 1;
    let mid = 0;


    while (left < right) {
        mid = Math.floor(left + (right - left) / 2);

        if (nums[mid] > nums[right]) {
            left = mid + 1;
        }
        else
            right = mid;
    }

    let start = left;
    left = 0;
    right = nums.length - 1;

    if (target >= nums[start] && target <= nums[right])
        left = start;
    else
        right = start;

    while (left <= right) {
        mid = Math.floor(left + (right - left) / 2);

        if (nums[mid] == target)
            return mid;

        if (nums[mid] > target)
            right = mid - 1;
        else
            left = mid + 1;
    }

    return -1;
};


let x = search([5, 6, 7, 0, 1, 2, 4], 9);

console.log(x);