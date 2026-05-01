// Given an array nums containing n distinct numbers in the range [0, n], 
// return the only number in the range that is missing from the array.

/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    return ((nums.length * (nums.length + 1)) / 2)
        - (nums.reduce((sum, num) => sum + num, 0));
};

//We are doing three things here. First, we find the sum of 0 to n using Gauss's formula, (n * (n + 1)) / 2. Instead of n,
//we use nums.length, as the array should have all numbers from 0 to n minus the one that is missing, but since arrays
//are 0 indexed, we don't need to account for that. Once we have the sum, we also need to find the actual sum of nums,
//which we do using JavaScript's built-in reduce() function, which sums all the elements of nums. Once we have the
//expected sum (left side of the subtraction) and the actual sum of nums (right side of the subtraction), we subtract the
//actual sum from the expected sum, which will always give us the missing number.