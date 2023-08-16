// Given an array nums sorted in non-decreasing order, return the maximum 
// between the number of positive integers and the number of negative integers.

// In other words, if the number of positive integers in nums is pos and the 
// number of negative integers is neg, then return the maximum of pos and neg.

// Note that 0 is neither positive nor negative.

/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumCount = function(nums) {
    let negNums = 0;
    while(nums[0] < 0){
        negNums++;
        nums.shift();
    }
    while(nums[0] == 0){
        nums.shift();
    }
    if(negNums > nums.length){
        return negNums;
    }
    return nums.length;
};

//We declare a variable negNums which will keep track of how many negative numbers we find in nums.
//We then use a while loop to continuously check if the first element in nums is negative. If it is,
//we increment negNums by 1, and use shift() on nums, which removes the first element of the array.
//This will run continuously until the first element is either 0 or positive. Once this finishes, we
//use another while loop to check if the first element of nums is 0. If it is, we use shift() again to
//remove that element from the array, and keep doing this until the first element is greater than 0.
//Once this while loop terminates, we check if negNums is greater than the length of nums, since at
//this point nums will only contain its positive integers. If it is, we return negNums. Otherwise, we
//return the length of the array.