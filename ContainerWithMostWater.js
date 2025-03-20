/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    
    let maximumArea = 0;

    let a_pointer = 0;
    let b_pointer = height.length - 1;

    while (a_pointer < b_pointer) {
        if (height[a_pointer] < height[b_pointer]) {
            maximumArea = Math.max(maximumArea, height[a_pointer] * (b_pointer - a_pointer));
            a_pointer++;
        }
        else {
            maximumArea = Math.max(maximumArea, height[b_pointer] * (b_pointer - a_pointer));
            b_pointer--;
        }
            
    }
    return maximumArea;
};

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));