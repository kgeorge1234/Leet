/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    
    let closest = Number.MAX_SAFE_INTEGER; // large number
    nums.sort((a, b) => a - b);
    let finalSum = 0;

    for (let i = 0; i < nums.length-2; i++){
        if (i==0 || (i >0 && nums[i] != nums[i-1]  )) {
            let sum = target - nums[i];
            let low = i + 1;
            let high = nums.length - 1;
    
            while (low < high) {
                if (nums[low] + nums[high] == sum) {
                    finalSum = nums[i] + nums[low] + nums[high];
                    return finalSum;
                }
                
                if (Math.abs((target - (nums[i] + nums[low] + nums[high]))) < closest) {
                    closest = Math.min(closest, Math.abs(target - (nums[i] + nums[low] + nums[high])));
                    finalSum = nums[i] + nums[low] + nums[high];
                } 
                
                if ( nums[low] + nums[high] > sum) {
                    high--;
                }
                else
                    low++;
                   
            }
        }
    }
    return finalSum;
};

let x = threeSumClosest([10,20,30,40,50,60,70,80,90], 1);
console.log(x);