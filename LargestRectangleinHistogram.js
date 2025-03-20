/**
 * @param {number[]} heights
 * @return {number}
 */

 //Greg Hogg
 var largestRectangleArea = function(heights) {
    let stack = [];
    let maxArea = 0;

    for(let i =0;i<heights.length;i++){
        let startIndex = i;
        while(stack.length >0 && heights[i] < stack[stack.length -1][0]){
            let [height, index] = stack.pop();
            let width = i - index;
            maxArea = Math.max(maxArea, width * height);
            startIndex = index;
        }

        stack.push([heights[i], startIndex]);
    }

    while(stack.length > 0){
        let [height, index] = stack.pop();
        let width = heights.length - index;
         maxArea = Math.max(maxArea, width * height);
    }

    return maxArea;
 };

let x = largestRectangleArea([2, 1, 5, 6, 2, 3]);
console.log(x);