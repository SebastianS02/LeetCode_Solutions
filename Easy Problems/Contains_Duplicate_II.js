// Given an integer array nums and an integer k, return true if there are two distinct
// indices i and j in the array such that nums[i] == nums[j] and abs(i - j) <= k.

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    for(let i = 0; i < nums.length; i++){
        for(let j = i+1; j < nums.length; j++){
            if(nums[i] == nums[j] && Math.abs(i-j) <= k){
                return true;
            }
        }
    }
    return false;
};

//We use a double for loop to iterate through this array. The first one starts at 0, and the second
//one starts at the previous for loops' element plus one, since we will not need to check the elements
//before, as we know those do not contain duplicates if we got past them. If these two elements match,
//and subtracting their indices is less than or equal to k, we return true and do not need to check
//the rest of the array, ending the program. If we get through both for loops, this means a duplicate
//was never found, therefore we return false.