/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    
    let myMap = new Map();
    
    
    for (let i = 0; i < nums.length; i++){
        if (myMap.has(nums[i])) {
            if (i - myMap.get(nums[i]) <= k)
                return true;

            myMap.set(nums[i], i);
        }
        else
            myMap.set(nums[i], i);
    }

    return false;
};

let x = containsNearbyDuplicate([1,2,3,1], 3);
console.log(x);