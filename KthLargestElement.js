/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    
    return quickSelect(0, nums.length -1);

    function quickSelect(left, right){
        let pivot = nums[right];
        let p = left;

        for(let i = left; i < right; i++){
            if(nums[i] <= pivot){
                [nums[i], nums[p]] = [nums[p], nums[i]];
                p++;
            }
        }
        [nums[p], nums[right]] = [nums[right],nums[p]];

        if(nums.length - k < p)
            return quickSelect(left, p-1);
        else if(nums.length - k > p)
            return quickSelect(p+1, right);
        else
            return nums[p];
    }
};

let x = findKthLargest([3, 2, 1, 5, 6, 4], 2);
// first p = 3, k = 2 means index = 4th element or second largest element in terms of p 
console.log(x);