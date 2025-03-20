/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
    let result = 0;
    let currentSum = 0;
    let dict = new Map();
    dict.set(0, 1);

    for (let n of nums) {
        currentSum += n;
        let diff = currentSum - k;

        result = result + (dict.get(diff) ?? 0);
        if (dict.has(currentSum))
            dict.set(currentSum, dict.get(currentSum) + 1);
        else
            dict.set(currentSum, 1);
    }

    return result
};

let x = subarraySum([5, 2, 3, 4,2,7,6], 6);
console.log(x);