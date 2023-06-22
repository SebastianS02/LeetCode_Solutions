// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times. 
// You may assume that the majority element always exists in the array.

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let count = 1;
    nums = nums.sort(function(a,b){return a-b});
    let currentElement = nums[0];
    for(let i = 1; i < nums.length; i++){
        if(currentElement == nums[i]){
            count++;
            if(count > nums.length / 2){
                return currentElement;
            }
        }
        else{
            currentElement = nums[i];
            count = 1;
        }
    }
    return currentElement;
};

//We sort the array using .sort() in a non-decreasing order, and declare two variables, count and
//currentElement. Since the array is sorted, count can check how many times an element appears as
//the for loop traverses through the array, and we use currentElement to check it with the element
//we are checking in the for loop, incrementing count every time we find the same one. Since we
//initialize count to 1 and currentElement to the first element in nums, we also start the for loop
//at i = 1, or the second element of nums. If the current element we are checking is equal to
//currentElement, we increment count by 1. If count is greater than half of the size of nums, this
//means that this element is already the majority element, and there is no need to check the rest of
//the array. If the element we are checking is not equal to currentElement, we change currentElement
//to this value since the previous element was not the majority, and reset count to 1 so we can keep
//track of how many times this new element will appear in the array. We return currentElement at the
//end of the program as a failsafe (e.g. array is empty or only has one value).