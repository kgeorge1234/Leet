var isValidSudoku = function(board) {
    let rows = new Set();
    let columns = new Set();
    let blocks = new Set();

    for (let i = 0; i < 9; i++){
        rows.clear()
        columns.clear();
        blocks.clear();

        for (let j = 0; j < 9; j++){
            if (board[i][j] != '.' && rows.has(board[i][j]))
                return false;
            else
                rows.add(board[i][j]);

            if (board[j][i] != '.' && columns.has(board[j][i]))
                return false;
            else
                columns.add(board[j][i]);

            if (board[3 * Math.floor( i / 3) + Math.floor( j / 3)][3 * (i % 3) + (j % 3)] != '.' && blocks.has(board[3 * Math.floor( i / 3) + Math.floor( j / 3)][3 * (i % 3) + (j % 3)]))
                return false;
            else
                blocks.add(board[3 * Math.floor( i / 3) + Math.floor( j / 3)][3 * (i % 3) + (j % 3)]);
        }
    }
    return true;
};

let x = isValidSudoku([[".",".",".",".","5",".",".","1","."],[".","4",".","3",".",".",".",".","."],[".",".",".",".",".","3",".",".","1"],["8",".",".",".",".",".",".","2","."],[".",".","2",".","7",".",".",".","."],[".","1","5",".",".",".",".",".","."],[".",".",".",".",".","2",".",".","."],[".","2",".","9",".",".",".",".","."],[".",".","4",".",".",".",".",".","."]]);
console.log(x);

/*let row = new Set(),
        col = new Set(),
        box = new Set();
    let _row = 0;
      let _col = 0;
      let _box = 0;
  for (let i = 0; i < 9; i++) {
    row.clear(), col.clear(), box.clear();

    for (let j = 0; j < 9; j++) {
      _row = board[i][j];
      _col = board[j][i];
      _box = board[3*Math.floor(i/3)+Math.floor(j/3)][3*(i%3)+(j%3)]
      
      if (_row != '.') {
        if (row.has(_row)) return false;
        row.add(_row);
      }
      if (_col != '.') {
        if (col.has(_col)) return false;
        col.add(_col);
      }
      
      if (_box != '.') {
        if (box.has(_box)) return false;
        box.add(_box);
      } 
    }
  }
  return true*/