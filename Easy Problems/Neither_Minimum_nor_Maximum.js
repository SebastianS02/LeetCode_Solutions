// Given an integer array nums containing distinct positive integers, 
// find and return any number from the array that is neither the minimum 
// nor the maximum value in the array, or -1 if there is no such number.

// Return the selected integer.

/**
 * @param {number[]} nums
 * @return {number}
 */
var findNonMinOrMax = function(nums) {
    if(nums.length < 3){
        return -1;
    }
    nums.sort(function(a,b){return a-b});
    return nums[1];
};

//First, we check if nums has a length of 2 or less, since if this is the case, there is no possible
//way to choose a value that is neither minimum or maximum, so immediately return -1 if this is the
//case. We then sort nums in non-decreasing order, though if it were in decreasing order the answer
//would be the same. We then return the second element, as in any sorted array greater than size 2, 
//the second element will always be neither the minimum or maximum value of the array.