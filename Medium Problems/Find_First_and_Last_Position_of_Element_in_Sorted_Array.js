// Given an array of integers nums sorted in non-decreasing order, 
// find the starting and ending position of a given target value.

// If target is not found in the array, return [-1, -1].

// You must write an algorithm with O(log n) runtime complexity.

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    let returnArr = [-1,-1];
    for(let i = 0; i < nums.length; i++){
        if(nums[i] == target && returnArr[0] == -1){
            returnArr[0] = i;
            returnArr[1] = i;
        }
        else if(nums[i] == target){
            returnArr[1] = i;
        }
    }
    return returnArr;
};

//We declare the return array immediately and assign it the values [-1,-1], so if we do not find
//the target values, the array will be returned in its original state. We use a for loop to traverse
//through the array, and at each element we check if the current element is equal to the target.
//For the first if statement, we also check if the first element is equal to -1, meaning we are
//checking if we have found the target value in the array yet. If we have not, we change the two values
//of the return array from -1 to the index of the current element. The second if statement only runs
//if the first if statement is not true, meaning we have found the target element already. If this is
//the case and we find the target value again, then we only change the second value of the return array
//to the current element, because the first value should stay the same since it is the first time we found
//the target value, and this value will represent the most recent, or last time we found it. Once the for
//loop is done running, we return the return array.