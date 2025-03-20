/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function (numCourses, prerequisites) {
  if (prerequisites.length == 0) {
    let result = [];
    for (let i = 0; i < numCourses; i++) result.push(i);
    return result;
  }

  let adj = new Map();
  let visited = new Set();

  for (let [a, b] of prerequisites) {
    if (adj.has(a)) adj.get(a).push(b);
    else adj.set(a, [b]);
  }

  let result = new Set();

  for (let key of adj.keys()) {
    if (!dfs(key)) return [];
  }

  for (let i = 0; i < numCourses; i++) {
    if (!adj.has(i) && !result.has(i)) result.add(i);
  }

  return [...result];

  function dfs(node) {
    if (visited.has(node)) return false;

    if (!adj.has(node) || adj.get(node).length == 0) {
      result.add(node);
      return true;
    }

    visited.add(node);
    for (let element of adj.get(node)) {
      if (!dfs(element)) return false;
    }

    visited.delete(node);
    result.add(node);
    adj.set(node, []);
    return true;
  }
};

let x = findOrder(4, [
  [1, 0],
  [2, 0],
  [3, 1],
  [3, 2],
]);
console.log(x);
