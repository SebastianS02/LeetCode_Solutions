// You are given an array of integers nums. 
// You are also given an integer original which is the 
// first number that needs to be searched for in nums.

// You then do the following steps:

// 1. If original is found in nums, multiply it by two (i.e., set original = 2 * original).
// 2. Otherwise, stop the process.
// 3. Repeat this process with the new number as long as you keep finding the number.

// Return the final value of original.

/**
 * @param {number[]} nums
 * @param {number} original
 * @return {number}
 */
var findFinalValue = function(nums, original) {
    for(let i = 0; i < nums.length; i++){
        if(nums[i] == original){
            original *= 2;
            i = -1;
        }
    }
    return original;
};

//We use a for loop to traverse nums. If the current element is equal to original, we multiply original
//by 2, then set i to -1, so we can start at the beginning of nums for the next iteration. Once we exit
//the for loop, we return original.