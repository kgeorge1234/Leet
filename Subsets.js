/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    let result = [];

    dfsalgorithm(nums, 0, []);

    function dfsalgorithm(nums, index, current) {
        result.push([...current]);
        
        for (let i = index; i < nums.length; i++){
            current.push(nums[i]);
            dfsalgorithm(nums, i + 1, current);
            current.pop()
        }
    }

    return result;
};

let x = subsets([1, 2, 3]);
console.log(x);