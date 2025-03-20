/**
 * @param {character[][]} maze
 * @param {number[]} entrance
 * @return {number}
 */
var nearestExit = function(maze, entrance) {
    let visited = new Array(maze.length);
   
    for (let i = 0; i < maze.length; i++){
        visited[i] = new Array(maze[0].length).fill(false);
    }

    let count = 0;
    visited[entrance[0]][entrance[1]] = true

    let steps = [[0, 1], [1, 0], [-1, 0], [0, -1]];

    let q = [];
    q.push(entrance);

    let temp;

    while (q.length != 0) {
        temp = q.length;
        count++;

        while (temp > 0) {
            let position = q.shift();
            

            for (let i = 0; i < steps.length; i++){
                let newRow =  position[0] + steps[i][0] ;
                let newCol =  position[1] + steps[i][1] ;

                if ((newRow >= 0 && newRow <= maze.length - 1) && (newCol >= 0 && newCol <= maze[0].length - 1) && maze[newRow][newCol] == "." && !visited[newRow][newCol])
                {
                    if (newRow == 0 || newCol == 0 || newRow == maze.length -1 || newCol == maze[0].length - 1)
                        return count;

                    visited[newRow][newCol] = true;
                    q.push([newRow, newCol]);
                }
            }
            temp--;
        }
    }

    return -1;
};

let x = nearestExit([[".","+","+","+","+"],[".","+",".",".","."],[".","+",".","+","."],[".",".",".","+","."],["+","+","+","+","."]], [0, 0]);
console.log(x);