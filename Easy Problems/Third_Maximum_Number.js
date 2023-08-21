// Given an integer array nums, return the third distinct maximum number in this array. 
// If the third maximum does not exist, return the maximum number.

/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    nums.sort(function(a,b){return b-a});
    let count = 1;
    if(nums.length < 3){
        return nums[0];
    }
    for(let i = 1; i < nums.length; i++){
        if(nums[i] == nums[i-1]){
            nums.splice(i-1,1);
            i--;
        }
        else{
            count++;
        }
        if(count >= 3){
            return nums[i];
        }
    }
    return nums[0];
};

//We sort the array in decreasing order, then declare a count variable to track how many distinct
//integers we have found in nums so far. We first check if the length of nums is less than 3. If it is,
//there will be no third maximum value, so we return the first element of nums, which will always be
//the maximum value after being sorted in decreasing order. We use a for loop to traverse nums, and we
//start at 1, since we will be comparing the current element with the previous element in every
//iteration. If the current element and previous element are equal, we remove the previous element and
//decrement i by 1 to avoid skipping elements. What we are doing here is removing duplicates from nums.
//If the two elements are not duplicates, we increment count by 1. If count ever reaches or exceeds 3,
//we return the current element, which will be the third maximum value. If we exit the array, a third
//maximum value was never found, so we return the largest value instead, which will always be the first
//element in nums.