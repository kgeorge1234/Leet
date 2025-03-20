/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    let result = [];

    function dfs(index, current) {
        if (current.length === k)
            result.push([...current]);

        for (let i = index; i <= n; i++){
            current.push(i);
            dfs(i + 1, current);
            current.pop();
        }
    }

    dfs(1, []);

    return result;
};


let x = combine(1, 1);
console.log(x);