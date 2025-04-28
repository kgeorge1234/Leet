/**
 * @param {number[][]} graph
 * @return {boolean}
 */
var isBipartite = function (graph) {
    let UN_VISITED = 0;
    let RED = 1;
    let GREEN = 2;

    let table = new Array(graph.length).fill(UN_VISITED);
    let queue = [];
    
    
    for (let i = 0; i < graph.length; i++){
        if (table[i] != UN_VISITED)
            continue;
        
        queue.push(i);
        
        table[i] = GREEN;

        while (queue.length > 0) {
            let vertex = queue.shift();

            let neighbors = graph[vertex];

            let curColor = table[vertex];
            let targetColor;

            if (curColor == GREEN)
                targetColor = RED;
            else
                targetColor = GREEN;

            for (let nei of neighbors) {
                if (table[nei] == curColor)
                    return false;

                if (table[nei] == UN_VISITED) {
                    table[nei] = targetColor;
                    queue.push(nei);
                }

            }
        }

    }

    return true;
};

let x = isBipartite([[1, 2, 3], [0, 2], [0, 1, 3], [0, 2]]);
console.log(x);