// Given an integer array nums, return true if any value appears at least twice in the array, 
// and return false if every element is distinct.

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    for(let i = 0; i < nums.length; i++){
        for(let j = i+1; j < nums.length; j++){
            if(nums[i] == nums[j]){
                return true;
            }
        }
    }
    return false;
};

//We use a double for loop to iterate through this array. The first one starts at 0, and the second
//one starts at the previous for loops' element plus one, since we will not need to check the elements
//before, as we know those do not contain duplicates if we got past them. If these two elements match,
//we return true and do not need to check the rest of the array, ending the program. If we get through
//both for loops, this means a duplicate was never found, therefore we return false.