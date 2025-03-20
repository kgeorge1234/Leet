/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function(isConnected) {
    
    let adj = new Map();
    let seen = new Set();
    let count = 0;

    for (let i = 0; i < isConnected.length; i++){
        adj.set(i, []);
        for (j = 0; j < isConnected[i].length; j++){
            if (i != j && isConnected[i][j] == 1)
                adj.get(i).push(j);          
        }
    }

    
    for (let [key, value] of adj) {
        if (!seen.has(key)) {
            dfs(key);
            count = count + 1;
        }
    }

    function dfs(node) {
        if (!seen.has(node))
            seen.add(node);
        else
            return;

        for (let val of adj.get(node)) {
            dfs(val);
        }
    }

    return count;

};

let x = findCircleNum([[1, 1, 0], [1, 1, 0], [0, 0, 1]]);
console.log(x);