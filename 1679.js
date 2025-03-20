/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxOperations = function(nums, k) {
    let bag = new Map();
    let count = 0;
    let a = 51 / 4;
    for(let num of nums){
        if (bag.has(num)) {
            bag.set(num, bag.get(num) - 1);
            count++;
            if (bag.get(num) == 0)
                bag.delete(num);
        }
        else if (bag.get(k - num))
            bag.set(k-num, bag.get(k-num)+1);
        else
            bag.set(k - num, 1);
            

    }

    return count;
};

let x = maxOperations([2,5,4,4,1,3,4,4,1,4,4,1,2,1,2,2,3,2,4,2], 3);
console.log(x);