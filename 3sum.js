/**
 * @param {number[]} nums
 * @return {number[][]}
 */
//Nick white
var threeSum = function(nums) {
    nums.sort((a, b) => a - b);
  let result = [];

  for (let i = 0; i <nums.length-2; i++){
      if (i == 0 || nums[i] != nums[i - 1]) {
          let target = 0 - nums[i];
          let low = i + 1;
          let high = nums.length - 1;

          while (low < high)
          {
              if (nums[low] + nums[high] == target) {
                  result.push([nums[i], nums[low], nums[high]]);
                  while (low < high && nums[low] == nums[low + 1])
                      low++;
                  while (low < high && nums[high] == nums[high - 1])
                      high--;
                  low++;
                  high--;
              }
              else if (nums[low] + nums[high] > target)
                  high--;
              else
                  low++;
          }
      }
  }
  return result;
};

let x = threeSum([-1, 0, 1, 2, 2, -1, -4]);