/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums, arr= [], res = []) {
    if (nums.length == 0) {
        res.push([...arr]);
    }

    for (let i = 0; i < nums.length; i++){
        arr.push(nums[i]);
        let rest = nums.filter((_,index) => index != i);
        permute(rest, arr, res);
        arr.pop();
    }

    return res;
};

let x = permute([1, 2, 3]);
console.log(x);