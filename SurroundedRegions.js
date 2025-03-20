/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function(board) {
    if (board.length == 0)
        return board;
    
    let rows = board.length;
    let columns = board[0].length;

    for (let i = 0; i < rows; i++){
        if (board[i][0] == 'O')
            dfs(i, 0);

        if (board[i][columns - 1] == 'O')
            dfs(i, columns - 1);
    }

    for (let i = 0; i < columns; i++){
        if (board[0][i] == 'O')
            dfs(0, i);

        if (board[rows-1][i] == 'O')
            dfs(rows-1, i);
    }

    for (let i = 0; i < rows; i++){
        for (let j = 0; j < columns; j++){
            if (board[i][j] === 'O')
                board[i][j] = 'X';

            if (board[i][j] === 'V')
                board[i][j] = 'O'
        }
    }

    function dfs(r, c) {
        if (r >= rows || r < 0 || c >= columns || c < 0 || board[r][c] === 'X' || board[r][c] === 'V')
            return;

        board[r][c] = 'V';

        dfs(r, c + 1);
        dfs(r, c - 1);
        dfs(r + 1, c);
        dfs(r - 1, c);
    }
};

let x = solve([["X","X","X","X"],["X","O","O","X"],["X","X","O","X"],["X","O","X","X"]]);
console.log(x);