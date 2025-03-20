/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
    let q = [];
    let steps = [[0,1],[1,0],[-1,0],[0,-1]];
    let count = 0;

    for(let i =0;i<grid.length;i++){
        for(let j =0;j < grid[i].length;j++){
            if(grid[i][j] == 2){
                q.push([i, j]);
            }
        }
    }

    while(q.length != 0){
        let size = q.length;
        while(size > 0){
            let edge = q.shift();

            for(let i = 0;i<steps.length;i++){
                let newRow = edge[0] + steps[i][0];
                let newCol = edge[1] + steps[i][1];

                if((newRow >=0 && newCol >=0) && (newRow <=grid.length -1 && newCol<= grid[0].length - 1) &&(grid[newRow][newCol] == 1)){
                    grid[newRow][newCol] = 3;
                    q.push([newRow,newCol]);
                }
            }
            size--;
        }
        if(q.length != 0)
            count++;
    }

    for(let i =0;i<grid.length;i++){
        for(let j =0;j < grid[i].length;j++){
            if(grid[i][j] == 1)
                return -1;
        }
    }

    return count;
};

let x = orangesRotting([[2,1,1],[1,1,1],[0,1,2]]);
console.log(x);