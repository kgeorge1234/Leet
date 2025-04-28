/**
 * @param {number[][]} grid
 * @return {number}
 */
var shortestPathBinaryMatrix = function(grid) {
    if(grid.length == 1 && grid[0][0] == 0)
        return 1;
    
    if(grid[0][0] != 0 || grid[grid.length-1][grid.length -1] != 0)
        return -1;
    
    let steps = [[0,1],[1,0],[-1,0],[0,-1],[-1,-1],[1,1],[1,-1],[-1,1]];
    let queue = [];
    let result = 0;
    let visited = new Set();
    queue.push([0,0,1]);
    visited.add("0,0");

    while(queue.length > 0){
        let val = queue.shift();
        let row = val[0];
        let col = val[1];
        let moves = val[2];
        for(let i = 0;i<steps.length;i++){
            let newRow = row + steps[i][0];
            let newCol = col + steps[i][1];

            let key = `${newRow},${newCol}`;

            if(newRow == grid.length -1 && newCol == grid[0].length - 1)
                return moves + 1;

            if(newRow >= 0 && newRow <= grid.length-1 && newCol >= 0 && newCol <= grid[0].length-1 
            && !visited.has(key) && grid[newRow][newCol] == 0){
                visited.add(key);
                queue.push([newRow,newCol,moves+1]);
            }
        }

    }
        return -1;
};