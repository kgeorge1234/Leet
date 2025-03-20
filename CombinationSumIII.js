/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function(k, n) {
    let result = [];

    function dfs(index, current, total){
        if(total < 0 || current.length > k)
            return;
        
        if(total == 0 && current.length == k)
            result.push([...current]);

        for(let i = index;i<=9;i++){
            current.push(i);
            dfs(i+1, current, total - i);
            current.pop();
        }

    }
    dfs(1,[],n);

    return result;
};

let x = combinationSum3(3, 7);
console.log(x);