/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    
    let colLength = matrix[0].length - 1;

    for (let i = 0; i < matrix.length; i++){
        if (matrix[i][0] <= target && matrix[i][colLength] >= target)
            return binarySearch(matrix, i, colLength, target);
    }
    return false;
};

function binarySearch(matrix, row, colLength, target) {
    let left = 0;
    let right = colLength;

    let mid = 0

    while (left <= right) {
        mid = left + Math.floor((right - left) / 2);
        if (matrix[row][mid] < target)
            left = mid + 1;
        else if (matrix[row][mid] > target)
            right = mid - 1;
        else
            return true;
    }

    return false;
}

let x = searchMatrix([[1]], 0);
console.log(x);