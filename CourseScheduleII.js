/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function(numCourses, prerequisites) {
    let adj = {};
    let visited = new Set();

    if (prerequisites.length == 0) {
        let output = [];
        let count = numCourses - 1;

        for (let i = 0; i < numCourses; i++){
            output.push(count);
            count--;
        }
        return output;
    }

    for (let [a, b] of prerequisites) {
        if (!adj[a])
            adj[a] = [b];
        else
            adj[a].push(b);
    }

    let result = new Set();

    for (let key in adj) {
        if (!dfs(key))
            return [];
    }

    for (let i = 0; i < numCourses; i++){
        if (!adj[i] && !result.has(i))
            result.add(i);
    }

    return [...result];


    function dfs(curr) {
        if (visited.has(curr))
            return false;

        if (!adj[curr] || adj[curr].length == 0)
        {
            result.add(Number(curr));
            return true;
        }

        visited.add(curr);

        for (let edge of adj[curr]) {
            if (!dfs(edge))
                return false;
        }


        visited.delete(curr);
        result.add(Number(curr));
        adj[curr] = [];
        return true;
    }

};

let x = findOrder(3, [[1, 0]]);
console.log(x);