// Given an integer array nums of length n where all the integers of nums are in the range [1, n]
//  and each integer appears once or twice, return an array of all the integers that appears twice.

// You must write an algorithm that runs in O(n) time and uses only constant extra space.

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
    let returnArr = [];
    nums.sort(function(a,b){return a-b});
    for(let i = 0; i < nums.length; i++){
        if(nums[i] == nums[i+1]){
            returnArr.push(nums[i]);
            i++;
        }
    }
    return returnArr;
};

//We declare an array to store any value that appears twice in the array. We then sort the function in
//non-decreasing order, and use a for loop to traverse through the array. If the current element we
//are checking is equal to the next element, since in a sorted array, and duplicate elements will be 
//next to each other, then we push that value into the return array, and increment i by 1. The reason
//we increment i by 1 only when we find a duplicate is because we do not need to check the next element,
//since we already compared it with the current one. The comparison with that duplicate element to the
//next one would always return false, and although this would not change the output, it saves time by
//skipping unecessary checks. We return the return aray once we exit the for loop.