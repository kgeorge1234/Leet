/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    let N = matrix.length;

    for (let i = 0; i < N; i++){
        for (let j = i; j < N; j++){
            let temp = matrix[i][j];
            matrix[i][j] = matrix[j][i];
            matrix[j][i] = temp;
        }
    }

    for (let i = 0; i < N; i++){
        for (let j = 0; j < Math.floor(N / 2); j++){
            let temp = matrix[i][j];
            matrix[i][j] = matrix[i][N - 1 - j];
            matrix[i][N - 1 - j] = temp;
        }
    }

    return matrix;
};

let x = rotate([[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]);
console.log(x);