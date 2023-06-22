// Given an integer array nums where every element appears three times except for one, 
// which appears exactly once. Find the single element and return it.

// You must implement a solution with a linear runtime complexity and use only constant extra space.

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    nums.sort(function(a,b){return a-b});
    for(let i = 0; i < nums.length; i+=3){
        if(nums[i] != nums[i+2]){
            return nums[i];
        }
    }
};

//We sort the given array nums in non-decreasing order, then use a for loop to traverse through the
//now sorted array. If the current element is not equal to the element two spaces ahead, this means 
//this element does not appear three times, since in a sorted array, each duplcate of an element should be
//right next to each other. If there are three duplicate numbers, they will be sorted as [...,3,3,3,...].
//We return this number. If the two elements are equal, the for loop does i+=3, which moves i three 
//elements ahead, since that is where the next unique number should be, and we check again.