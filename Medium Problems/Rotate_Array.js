// Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    k %= nums.length;
    while(k > 0){
        nums.unshift(nums[nums.length - 1]);
        nums.pop();
        k--;
    }
};

//We do the following operation on k: k = k % nums.length. We are essentially dividing k by the length
//of nums, but keeping the remainder. This is because rotating the array k times where k is the length
//of the array would lead to the same array. To save time, we reduce k to skip rotating the array
//unnecessarily. Once this is done, we use a while loop to rotate the array one step at a time. First,
//we unshift the last element in the array. What this does is it adds the last value of the array to
//the beginning of the array. Then, we pop the last value out of the array. These two operations rotate
//the array one time, and we subtract k by 1 once these two lines execute. Once k is 0, we exit the
//while loop, but return nothing, as the question requested we modify nums in place.