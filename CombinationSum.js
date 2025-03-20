/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    
    let res = [];

    function dfs(index, target, arr) {
        
        if (target < 0)
            return;

        if (target === 0)
            res.push([...arr]);

        for (let i = index; i < candidates.length; i++){
            arr.push(candidates[i]);

            dfs(i, target - candidates[i], arr);

            arr.pop();

        }
    }

    dfs(0, target, []);

    return res;
};

let x = combinationSum([2, 3, 6, 7], 7);
console.log(x);