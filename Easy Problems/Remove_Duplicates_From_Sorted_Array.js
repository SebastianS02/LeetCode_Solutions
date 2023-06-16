// Given an integer array nums sorted in non-decreasing order, 
//   remove the duplicates in-place such that each unique element appears only once. 
//   The relative order of the elements should be kept the same. 
//   Then return the number of unique elements in nums.

// Consider the number of unique elements of nums to be k, to get accepted, 
//   you need to do the following things:

// Change the array nums such that the first k elements of nums contain the unique elements
//   in the order they were present in nums initially. 
//   The remaining elements of nums are not important as well as the size of nums.

// Return k.

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    for(let i = 0; i < nums.length; i++){
        if(nums[i] == nums[i+1]){
            nums.splice(i, 1);
            i--;
        }
    }
    return nums.length;
};

//We use a for loop to go through the array. Since the array is sorted, we can check if our current
//element matches the element in front of it, because duplicates in a sorted array would be next to
//each other. If a duplicate is found, we use the splice method to remove that element from the 
//original array, then subtract i by 1 to go back to the element we were checking. We return the
//length of the array, which is also the total amount of unique elements in the array after the for
//loop is finished executing.