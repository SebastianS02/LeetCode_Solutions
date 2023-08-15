// Given an integer array nums and an integer k, 
// return the number of pairs (i, j) where i < j such that |nums[i] - nums[j]| == k.

// The value of |x| is defined as:

// x if x >= 0.
// -x if x < 0.

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countKDifference = function(nums, k) {
    let count = 0;
    for(let i = 0; i < nums.length - 1; i++){
        for(let j = i + 1; j < nums.length; j++){
            if(Math.abs(nums[i] - nums[j]) == k){
                count++;
            }
        }
    }
    return count;
};

//We declare a count variable to track how many valid pairs we find as we traverse the nums array.
//We use a double for loop to traverse nums and check every possible pair combination, with the inner
//loop starting at i + 1, ensuring we do not check a certain pair more than once. If we find a pair
//whose absolute difference equals k, we increment count by 1. Once we exit the outer loop, we return
//count.