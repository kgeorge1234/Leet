/**
 * @param {number[]} height
 * @return {number}
 */
//algoJs
var trap = function(height) {
    let forwardMax = [];
    let backwardMax = [];
    let result = 0;

    let maxHeight = 0;
    for (let i = 0; i < height.length;i++) {
        if (height[i] > maxHeight)
            maxHeight = height[i];
        
        forwardMax[i] = maxHeight;
    }

    maxHeight = 0;

    for (let i = height.length - 1; i >= 0; i--){
        if (height[i] > maxHeight)
            maxHeight = height[i];

        backwardMax[i] = maxHeight;
    }

    for (let i = 0; i < height.length; i++){
        result = result + (Math.min(forwardMax[i], backwardMax[i]) - height[i]);
    }

    return result;
};

let x = trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]);
console.log(x);