// The next greater element of some element x in an array is the 
// first greater element that is to the right of x in the same array.

// You are given two distinct 0-indexed integer arrays 
// nums1 and nums2, where nums1 is a subset of nums2.

// For each 0 <= i < nums1.length, find the index j such that nums1[i] == nums2[j] 
// and determine the next greater element of nums2[j] in nums2. 
// If there is no next greater element, then the answer for this query is -1.

// Return an array ans of length nums1.length such that 
// ans[i] is the next greater element as described above.

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    let arr = [];
    let largerFound = false;
    for(let i = 0; i < nums1.length; i++){
        for(let j = nums2.indexOf(nums1[i]) + 1; j < nums2.length; j++){
            if(nums2[j] > nums1[i]){
                largerFound = true;
                arr.push(nums2[j]);
                break;
            }
        }
        if(!largerFound){
            arr.push(-1);
        }
        largerFound = false;
    }
    return arr;
};

//We declare an array to store the next greater elements, and a largerFound variable to track if we
//have found a next greater element. We use a double for loop to traverse the array and check every
//element with all elements after it. The first for loop will traverse the entirety of nums1, while
//the inner loop will traverse from the index after nums1's element in nums2 to the end of nums2.
//In simpler terms, wherever the element in nums1 is found in nums2, we will check every value after
//it in nums2. If a next greater element is found, we set the largerFound variable to true, push that
//element into arr, then break the inner loop. After the inner loop, we check is largerFound is false.
//If it is, a next greater element was never found, meaning no value was pushed into arr for this i,
//so we push -1. We set largerFound to false to prepare it for the next iteration of the outer loop.
//We return arr once we exit the outer loop.