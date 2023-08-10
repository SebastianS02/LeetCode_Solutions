// Given an integer array nums of length n, you want to create an array ans of length
// 2n where ans[i] == nums[i] and ans[i + n] == nums[i] for 0 <= i < n (0-indexed).

// Specifically, ans is the concatenation of two nums arrays.

// Return the array ans.

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function(nums) {
    let ans = [];
    for(let i = 0; i < nums.length; i++){
        ans[i] = nums[i];
        ans[nums.length + i] = nums[i];
    }
    return ans;
};

//We declare the ans array. We use a for loop to iterate through nums, and with every iteration, 
//whatever value is at the current index for nums, we set the value of the element at that index in
//ans. We input the same value at the index plus the length of nums, as the array ans is essentially
//nums just written twice.