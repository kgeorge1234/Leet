/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
    let low = 0;
    let high = nums.length - 1;

    let mid;

    while (low < high) {
        mid = low + Math.trunc((high - low) / 2);

        if (nums[mid] < nums[mid + 1])
            low = mid + 1;
        else
            high = mid;
    }

    return low;
};

let x = findPeakElement([1, 2, 3, 1]);
console.log(x);