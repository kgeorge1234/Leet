/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    let adj = {};
    let visited = new Set();

    for (let [a, b] of prerequisites) {
        if (!adj[a])
            adj[a] = [b]
        else
            adj[a].push(b);
    }

    function dfs(current) {
        if (visited.has(current))
            return false;

        if (!adj[current]  ||  adj[current].length == 0) {
            return true 
        }

        visited.add(current);

        if (adj[current]) {
            for (let edge of adj[current]) {
                if (!dfs(edge))
                    return false;
            }
        }

        visited.delete(current);

        adj[current] = [];

        return true;
    }

    for (let key in adj) {
        if (!dfs(key))
            return false;

    }
    return true;
    
};

let x = canFinish(4,[[1,2],[2,3],[3,4],[4,5]]);
console.log(x);