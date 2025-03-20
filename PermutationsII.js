/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
   
    let res = [];
    let arr = [];
    nums.sort((a, b) => a - b);
    permuteHelper(nums, arr, res);
    return res;
   
    function permuteHelper(nums, arr, res) {
     if (nums.length == 0) {
         res.push([...arr]);
     }
 
     for (let i = 0; i < nums.length; i++){
 
        if (i == 0 || (nums[i] != nums [i-1])) {
          arr.push(nums[i]);
          let rest = nums.filter((_,index) => index != i);
          permuteHelper(rest, arr, res);
          arr.pop();
        }
     }
 
     return res;
   }
};

let x = permuteUnique([1, 1, 2]);
console.log(x);