/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function(matrix) {

    let rows = matrix.length;
    let col = matrix[0].length;
    let maxVal = 0;

    if (rows ==1 || col == 1) {
        for (let i = 0; i < rows; i++){
            for (let j = 0; j < col; j++){
                if (matrix[i][j] == "1")
                    return 1;
            }
        }
        return 0;
    }

    //traverse bottom row

    for (let j = 0; j < col; j++){
        if (matrix[rows - 1][j] == "1") {
            maxVal = 1;
            break;
        }     
    }

    //traverse right most col

    for (let i = 0; i < rows; i++){
        if (matrix[i][col-1] == "1") {
            maxVal = 1;
            break;
        }     
    }

    for (let i = rows-2; i >= 0; i--){
        for (let j = col-2; j >= 0; j--){
            if (matrix[i][j] == "1" || matrix[i][j] >=1)
                matrix[i][j] = 1 + Math.min(Number(matrix[i + 1][j]), Number(matrix[i][j + 1]), Number(matrix[i + 1][j + 1]));
                maxVal = Math.max(maxVal, matrix[i][j])
        }
    }
    
    return maxVal * maxVal;

};

let x = maximalSquare([["0","1"],["1","0"]]);
console.log(x);