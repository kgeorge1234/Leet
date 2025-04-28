/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
// var canFinish = function(numCourses, prerequisites) {
//     let adj = {};
//     let visited = new Set();

//     for (let [a, b] of prerequisites) {
//         if (!adj[a])
//             adj[a] = [b]
//         else
//             adj[a].push(b);
//     }

//     function dfs(current) {
//         if (visited.has(current))
//             return false;

//         if (!adj[current]  ||  adj[current].length == 0) {
//             return true 
//         }

//         visited.add(current);

//         if (adj[current]) {
//             for (let edge of adj[current]) {
//                 if (!dfs(edge))
//                     return false;
//             }
//         }

//         visited.delete(current);

//         adj[current] = [];

//         return true;
//     }

//     for (let key in adj) {
//         if (!dfs(key))
//             return false;

//     }
//     return true;
    
// };


var canFinish = function(numCourses, prerequisites) {
    let adj = new Map();
    let visited = new Set();

    // Build the adjacency list as a Map
    for (let [a, b] of prerequisites) {
        if (!adj.has(a)) {
            adj.set(a, [b]);
        } else {
            adj.get(a).push(b);
        }
    }

    function dfs(current) {
        if (visited.has(current)) return false;

        if (!adj.has(current) || adj.get(current).length === 0) {
            return true;
        }

        visited.add(current);

        for (let neighbor of adj.get(current)) {
            if (!dfs(neighbor)) return false;
        }

        visited.delete(current);
        adj.set(current, []); // clear processed node's edges

        return true;
    }

    for (let [key] of adj) {
        if (!dfs(key)) return false;
    }

    return true;
};


let x = canFinish(4,[[1,2],[2,3],[3,4],[4,5]]);
console.log(x);