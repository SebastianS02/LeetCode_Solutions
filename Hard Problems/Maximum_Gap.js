// Given an integer array nums, return the maximum difference between two successive elements
// in its sorted form. If the array contains less than two elements, return 0.

// You must write an algorithm that runs in linear time and uses linear extra space.

/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumGap = function(nums) {
    let largestGap = 0;
    if(nums.length < 2){
        return 0;
    }
    nums.sort(function(a,b){return a-b});
    for(let i = 0; i < nums.length; i++){
        if(nums[i+1] - nums[i] > largestGap){
            largestGap = nums[i+1] - nums[i];
        }
    }
    return largestGap;
};

//We declare a largestGap variable to keep track of the largest gap within the given array nums.
//In order to save memory and time, we check to see if the length of the array is less than 2,
//because if that is true, there cannot be a gap, and we return 0. Otherwise, we sort nums in
//non-decreasing order, then use a for loop to traverse through the array. We use an if statement
//to check if the current element subtracted from the next element is greater than the largest gap.
//If it is, we replace largest gap with this value, and move on to the next element. Since the array
//is sorted, there is no need to go back and check the previous values again. Since largestGap is
//initialized to 0, the first two elements will always have the largest gap at first. We return
//largestGap once the for loop is finished executing.