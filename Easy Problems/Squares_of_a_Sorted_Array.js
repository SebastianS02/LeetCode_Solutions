// Given an integer array nums sorted in non-decreasing order, 
// return an array of the squares of each number sorted in non-decreasing order.

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    for(let i = 0; i < nums.length; i++){
        nums[i] = Math.pow(nums[i], 2);
    }
    nums.sort(function(a,b){return a-b});
    return nums;
};

//We use a for loop to iterate through the given nums array. We square every element using the
//Math.pow() function, with the current element being the base and 2 being the exponent. Once we
//exit the for loop, every element has been squared, but the array may not be sorted, so we use
//the sort() function to sort it again, then return the array.