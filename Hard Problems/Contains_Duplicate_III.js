// You are given an integer array nums and two integers indexDiff and valueDiff.

// Find a pair of indices (i, j) such that:

// i != j,
// abs(i - j) <= indexDiff.
// abs(nums[i] - nums[j]) <= valueDiff, and

// Return true if such pair exists or false otherwise.

/**
 * @param {number[]} nums
 * @param {number} indexDiff
 * @param {number} valueDiff
 * @return {boolean}
 */
var containsNearbyAlmostDuplicate = function(nums, indexDiff, valueDiff) {
    for(let i = 0; i < nums.length; i++){
        for(let j = i+1; j < nums.length; j++){
            if(Math.abs(i-j) <= indexDiff 
                && Math.abs(nums[i] - nums[j]) <= valueDiff){
                    return true;
            }
        }
    }
    return false;
};

//We use a double for loop to traverse the array and check each element with the others. First, we
//check the first element with every element after it, then the second element with every element
//after it, and so on until we either find a duplicate or not. Since we have the second for loop
//start one index after the first for loop, in the if statement, there is no need to check if i != j,
//because this condition will always be true. We check if the absolute value of the indices is less
//than or equal to the given indexDiff value, and if the values of these indices is less than or
//equal to the given valueDiff, as stated by the question. If both of these conditions are true, we
//immediately return true and the program ends. If we exit the for loop, this means the conditions
//were never both satisfied, so we return false.

//Note: The challenge of this program was getting it to finish in a certain time frame. Certain
//leetcode testcases contain arrays with thousands or millions of values that test the efficiency
//of your program. If your program does not do what needs to be done in a certain time frame, which
//I belive is roughly five seconds, the test case will automatically fail and throw a "Time Limit
//Exceeded" error. 