/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */

//Neetcode
var merge = function(nums1, m, nums2, n) {
    let last = m + n - 1;
    m = m -1;
    n = n - 1;
    while( m >= 0 && n >= 0){
        if(nums1[m] > nums2[n]){
            nums1[last] = nums1[m];
            m--;
        }
        else{
            nums1[last] = nums2[n];
            n--;
        }
        last--;
    }

    while(n >= 0){
        nums1[last] = nums2[n];
        last--;
        n--;
    }

    return nums1;
};