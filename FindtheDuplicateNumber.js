/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    let slow = 0;
    let fast = 0;

    while(true){
        if(slow >= nums.length)
            slow = slow - nums.length - 1;

        if(fast >= nums.length)
            fast = fast - nums.length;

        if(slow != fast && nums[slow] == nums[fast] )
            return nums[slow];
        
        slow+=1;
        fast+=2;
    }
};

let x = findDuplicate([1, 3, 4, 2, 2]);
console.log(x);