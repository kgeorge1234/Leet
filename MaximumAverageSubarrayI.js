/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    
    let back = 0;

    let count = 0;
    let maxSum = Number.MIN_SAFE_INTEGER;
    let sum = 0;

    for(let i =0;i<nums.length;i++){
        if(count == k){
            sum = sum+nums[i] - nums[back];
            maxSum = Math.max(maxSum, sum );
            back++;
        }
        else{
            sum = sum + nums[i];
            count++;
            maxSum = sum;
        }
        
    }

    if (maxSum < sum)
        return sum / k.toFixed(5);

    return parseFloat((maxSum/k).toFixed(5));
};

let x = findMaxAverage([1, 12, -5, -6, 50, 3], 4);
console.log(x);