/**
 * @param {number} num
 * @return {number}
 */
var maximumSwap = function(num) {
    if (num <= 10)
        return num;

    let digits = String(num).split("");
    let maxValueIndex = digits.length - 1;
    let swapLeft = -1;
    let swapRight = digits.length - 1;

    for (let i = digits.length - 2; i >= 0; i--){
        if (digits[i] > digits[maxValueIndex])
            maxValueIndex = i;
        else if (digits[i] < digits[maxValueIndex]) {
            swapRight = maxValueIndex;
            swapLeft = i;
        }
            
    }

    if (swapLeft != -1)
        [digits[swapLeft], digits[swapRight]] = [digits[swapRight], digits[swapLeft]];

    return Number(digits.join(""));

    

};
let x = maximumSwap(1993);
console.log(x);