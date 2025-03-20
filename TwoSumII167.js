/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let start = 0, end = numbers.length - 1;
   
    while (start < end) {
        if (numbers[start] + numbers[end] < target) {
            start++;
        }
        else if (numbers[start] + numbers[end] > target) {
            end--;
        }
        else
            return [start+1, end + 1];
    }
};

let x = twoSum([2,7,11,15], 9);
console.log(x);