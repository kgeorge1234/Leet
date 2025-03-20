var searchRange = function(nums, target) {
    
    if (nums.length == 0)
        return [-1, -1];

    let output = [];

    let left = 0;
    let right = nums.length - 1;
    let mid;
    let flag2 = 0;
    let flag3 = 0;

    let left_bounds = 0;
    let right_bounds = 0;
    let mid_alt = 0;

    while (left <= right) {
        mid = Math.floor(left + (right - left) / 2);

        if (nums[mid] == target) {
            //left bounds check
            if (mid != 0 && nums[mid - 1] == target) {
                right_bounds = mid - 1;
                left_bounds = left;

                while (left_bounds <= right_bounds && flag2 == 0) {
                    
                    mid_alt = Math.floor(left_bounds + (right_bounds - left_bounds) / 2);


                    if (nums[mid_alt] == target && nums[mid_alt - 1] != target) { 
                        output.push(mid_alt);
                        flag2 = 1;
                    }
                    else if (nums[mid_alt] == target && nums[mid_alt - 1] == target)
                        right_bounds = mid_alt - 1;
                    else
                        left_bounds = mid_alt + 1;
                    
                }
            }
            else
                output.push(mid);

            if (mid != nums.length - 1 && nums[mid + 1] == target) {
                left = mid + 1;

                while (left <= right && flag3 == 0) {
                    mid = Math.floor(left + (right - left) / 2);


                    if (nums[mid] == target && nums[mid + 1] != target) {
                        
                        output.push(mid);
                        flag3 = 1;
                    }
                    else if (nums[mid] == target && nums[mid + 1] == target)
                        left = mid + 1;
                    else
                        right = mid - 1;
                }
            }
            else
                output.push(mid);
            
            return output;
        }
        else if (nums[mid] > target)
            right = mid - 1;
        else
            left = mid + 1;
    }

    return [-1, -1];
};

let x = searchRange([0,0,0,0,0,1,1,2,2,3,4,4,5,5,5,5,6,7], 0);
console.log(x);