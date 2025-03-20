/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    if (nums.length == 1)
        return nums[0];

    let low = 0;
    let high = nums.length - 1;
    let mid;

    while (low < high ) {
        mid = low + Math.trunc((high - low) / 2);

        if (nums[mid] < nums[high])
            high = mid;
        else
            low = mid + 1;
    }
    
    return nums[low];
};

let x = findMin([3, 4, 5, 1, 2]);
console.log(x);