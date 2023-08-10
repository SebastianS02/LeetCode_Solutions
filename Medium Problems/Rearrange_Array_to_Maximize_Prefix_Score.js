// You are given a 0-indexed integer array nums.
// You can rearrange the elements of nums to any order (including the given order).

// Let prefix be the array containing the prefix sums of nums after rearranging it.
// In other words, prefix[i] is the sum of the elements from 0 to i in nums after rearranging it.
// The score of nums is the number of positive integers in the array prefix.

// Return the maximum score you can achieve.

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxScore = function(nums) {
    nums.sort(function(a,b){return b-a});
    let sum = 0;
    let count = 0;
    for(let i = 0; i < nums.length; i++){
        sum += nums[i];
        if(sum <= 0){
            return count;
        }
        count++;
    }
    return count;
};

//We sort the array nums in decreasing order so we can start summing the largest values at the
//beginning of the array. We declare a sum variable to track the sum of the elements, and a count
//variable to track how many times we added an element to sum before sum became 0 or negative.
//We use a for loop to iterate through nums, and at each element we add the value of the current
//element to sum. Then, we check if sum is less than or equal to 0. If it is, we return count. If
//not, we increment count by 1. If we reach the end of the for loop, we return count.