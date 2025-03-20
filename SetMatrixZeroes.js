/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    let Zeroespos = [];

    for (let i = 0; i < matrix.length; i++){
        for (let j = 0; j < matrix[0].length; j++){
            if (matrix[i][j] === 0)
                Zeroespos.push([i, j]);
        }
    }

    for (let i = 0; i < Zeroespos.length; i++){
        const [row, col] = Zeroespos[i];

        for (let j = 0; j < matrix.length; j++){
            matrix[j][col] = 0;
        }
      
        for (let j = 0; j < matrix[0].length; j++){
            matrix[row][j] = 0;
        }
    }

    return matrix;
};

let x = setZeroes([[0,1,2,0],[3,4,5,2],[1,3,1,5]]);
console.log(x);
