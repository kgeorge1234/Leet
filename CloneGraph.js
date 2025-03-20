class Node{
    constructor(val) {
        this.val = val;
        this.neighbors = []
    }
}

var cloneGraph = function(node) { 
    
    if (node == null)
        return null;
    
    let oldToNew = new Map();
    
    function dfs(node) {
        if (oldToNew.get(node))
            return oldToNew.get(node);

        let newNode = new Node(node.val);
        oldToNew.set(node, newNode);

        for (const n of node.neighbors) {
            newNode.neighbors.push(dfs(n));
        }

        return newNode;
    }

    return dfs(node);
    
};


// Create nodes
const node1 = new Node(1);
const node2 = new Node(2);
const node3 = new Node(3);
const node4 = new Node(4);

// Set up adjacency list relationships
node1.neighbors = [node2, node4];
node2.neighbors = [node1, node3];
node3.neighbors = [node2, node4];
node4.neighbors = [node1, node3];

let x = cloneGraph(node1);
console.log(x);