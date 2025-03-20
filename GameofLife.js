/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function (board) {
    
    let activeCount = 0;
    
    for (let i = 0; i < board.length; i++){
        for (j = 0; j < board[0].length; j++){
            activeCount = activeNeighbours(board, i, j);
            if (board[i][j] == 0 && (activeCount == 3))
                board[i][j] = 2 // change to active 
            else if (board[i][j] == 1 && (activeCount < 2 || activeCount > 3))
                board[i][j] = -2 //change to dead in next
        }
    }

    updateBoard(board);
};

function updateBoard(board) {
    for (let i = 0; i < board.length; i++){
        for (j = 0; j < board[0].length; j++){
            if (board[i][j] == 2)
                board[i][j] = 1;
            else if (board[i][j] == -2)
                board[i][j] = 0;
        }
    }
}

function activeNeighbours(board, row, col) {
    let directions = [[0, 1], [0, -1], [-1, 0], [-1, -1], [-1, 1], [1, 0], [1, -1], [1, 1]];
    let newRow;
    let newColumn;
    let activeCount = 0;

    for (const direction of directions) {
        newRow = row + direction[0];
        newColumn = col + direction[1];

        if (newRow >= 0 && newRow < board.length && newColumn >= 0 && newColumn < board[0].length && (board[newRow][newColumn] == 1 || board[newRow][newColumn] == -2))
            activeCount++;
    }
    return activeCount;
}

let board = [[0, 1, 0], [0, 0, 1], [1, 1, 1], [0, 0, 0]];
let x = gameOfLife(board);
console.log("hey");