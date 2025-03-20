/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
    nums.sort((a, b) => a - b);
    let res = [];

    function dfs(index, curr) {
        res.push([...curr]);

        for (let i = index; i < nums.length ; i++){
            if (i === index || nums[i] != nums[i - 1]) {
                curr.push(nums[i]);
                dfs(i + 1, curr);
                curr.pop();
            }
        }
    }

    dfs(0, []);
    return res;
};

let x = subsetsWithDup([2, 1, 2]);
console.log(x);