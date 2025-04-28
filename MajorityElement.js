/**
 * @param {number[]} nums
 * @return {number}
 */
//Deepti

var majorityElement = function(nums) {
    let majorityNum = null;
    let count = 0;
    for (let num of nums) {
        if (count == 0)
            majorityNum = num;

        if (num == majorityNum)
            count++;
        else
            count--;
    }

    return majorityNum;
};

let x = majorityElement([6,6,6,7,7]);
console.log(x);