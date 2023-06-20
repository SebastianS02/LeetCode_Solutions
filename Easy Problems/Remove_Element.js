// Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. 
// The order of the elements may be changed. 
// Then return the number of elements in nums which are not equal to val.

// Consider the number of elements in nums which are not equal to val be k, to get accepted, 
// you need to do the following things:

// Change the array nums such that the first k elements of nums contain the elements which are not equal to val. 
// The remaining elements of nums are not important as well as the size of nums.

// Return k.

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    for(let i = 0; i < nums.length; i++){
        if(nums[i] == val){
            nums.splice(i, 1);
            i--;
        }
    }
    return nums.length;
};

//I use a for loop to traverse through the given array. At each element, we check if the number is
//equal to the value we are given. If they are equal, we use the splice method to remove that number
//from the array, then subtract i by 1 to make sure we do not skip any numbers.