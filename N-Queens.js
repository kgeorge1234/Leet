/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
    if (n == 1)
        return [["Q"]];

    let colSet = new Set();
    let posDiag = new Set;
    let negdiag = new Set();
    let board = new Array(n);

    for (let i = 0; i < n; i++){
        board[i] = new Array(n).fill(".");
    }
    const isValidCol = (row, col) => !colSet.has(col) && !posDiag.has(row + col) && !negdiag.has(row - col);

    const addQueen = (row, col) => {
        colSet.add(col);
        posDiag.add(row + col);
        negdiag.add(row - col);
        board[row][col] = "Q";
    }

    const deleteQueen = (row, col) => {
        colSet.delete(col);
        posDiag.delete(row + col);
        negdiag.delete(row - col);
        board[row][col] = ".";
    }

    let result = [];

    //backtracking
    function recurse(row) {
        if (row == n) {
            return result.push([...board].map((row) => row.join("")));
        }

        for (let column = 0; column < n; column++){
            if (isValidCol(row, column)) {
                addQueen(row, column);
                recurse(row + 1);
                deleteQueen(row, column);
            }
        }
    }
    recurse(0);
    return result;
};

let x = solveNQueens(4);
console.log(x);