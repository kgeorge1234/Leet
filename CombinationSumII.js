/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    let result = [];
    candidates.sort((a, b) => a - b);
    findcombinations(0, target, []);
    return result;
    
    function findcombinations(index, target, arr) {
        if (target == 0) {
            result.push([...arr]);
            return;
        }

        if (target < 0)
            return;

        for (let i = index; i < candidates.length; i++){
            if (i == index || candidates[i] != candidates[i - 1]) {
                arr.push(candidates[i]);
                findcombinations( i + 1, target - candidates[i], arr);
                arr.pop();
            }
        }
        
    }
};

let x = combinationSum2([10, 1, 2, 7, 6, 1, 5], 8);
console.log(x);