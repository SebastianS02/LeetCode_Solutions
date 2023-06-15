// Given an array of integers nums and an integer target, 
//      return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, 
//      and you may not use the same element twice.

// You can return the answer in any order.

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var number = [];
    for(var i = 0; i < nums.length; i++){
        for(var j = 0; j < nums.length; j++){
            if(nums[i] + nums[j] == target && i != j){
                number[0] = i;
                number[1] = j;
                return number;
            }
        }
    }
};

// This code declares the number array needed for the output,
// then uses a double for loop to iterate through the given array of integers.
// If it finds two numbers that equal the target when summed and are not equal,
// the indexes of those two numbers in the given array are stored in the newly created
// number array, then the number array is returned.
