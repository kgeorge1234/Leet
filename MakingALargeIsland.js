/**
 * @param {number[][]} grid
 * @return {number}
 */

//neetcode
// [1, 0, 0]
// [1, 0, 0]
// [0, 1, 0]

var largestIsland = function(grid) {
    let N = grid.length;

    function checkBounds(row, col) {
        if (row >= 0 && row <= N - 1 && col >= 0 && col <= N - 1) {
            return true;
        }
        else
            return false;
    }

    function dfs(row, col, label){
        if (!checkBounds(row, col) || grid[row][col] != 1)
            return 0;

        grid[row][col] = label;
        let size = 1;

        for (let step of steps) {
            let newRow = row + step[0];
            let newCol = col + step[1];

            size = size + dfs(newRow, newCol, label);
        }
        return size;
    }

    let steps = [[0, 1], [1, 0], [-1, 0], [0, -1]];

    let sizeMap = new Map();
    let label = 2;
    let size;
    for (let i = 0; i < grid.length;i++){
        for (let j = 0; j < grid[0].length; j++){
            if (grid[i][j] == 1) {
                size = dfs(i, j, label);
                sizeMap.set(label, size);
                label += 1;
            }
        }
    }

    function connect(row, col) {
        let visit = new Set();
        let result = 1;
        for (let step of steps) {
            let newRow = row + step[0];
            let newCol = col + step[1];
            if (checkBounds(newRow, newCol) && !visit.has(grid[newRow][newCol]) && grid[newRow][newCol] != 0) {
                result = result + sizeMap.get(grid[newRow][newCol])
                visit.add(grid[newRow][newCol]);
            }
                
        }
        return result;
    }


    let result;
    if (sizeMap.length == 0)
        result = 0;
    else
        result = Math.max(...sizeMap.values());

    for (let i = 0; i < grid.length; i++){
        for (let j = 0; j < grid[0].length; j++){
            if (grid[i][j] == 0) {
                result = Math.max(result, connect(i, j));
            }
        }
    }

    return result;
};

let x = largestIsland([[1,0,0], [1,0,0],[0,1,0]]);
console.log(x);