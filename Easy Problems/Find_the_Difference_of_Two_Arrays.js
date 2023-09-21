// Given two 0-indexed integer arrays nums1 and nums2, return a list answer of size 2 where:

// answer[0] is a list of all distinct integers in nums1 which are not present in nums2.
// answer[1] is a list of all distinct integers in nums2 which are not present in nums1.

// Note that the integers in the lists may be returned in any order.

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function(nums1, nums2) {
    let answer = [[],[]]
    for(let i = 0; i < nums1.length; i++){
        if(!(nums2.includes(nums1[i])) && !(answer[0].includes(nums1[i]))){
            answer[0].push(nums1[i]);
        }
    }
    for(let j = 0; j < nums2.length; j++){
        if(!(nums1.includes(nums2[j])) && !(answer[1].includes(nums2[j]))){
            answer[1].push(nums2[j]);
        }
    }
    return answer;
};

//We declare the answer array, with empty arrays in its first and second indices. We use a for loop to
//traverse the nums1 array, and an if statement to check if nums2 does not include the current element,
//and if the first array in answer does not contain it as well. If both are true, we push this value
//into the first array, otherwise we do nothing. We repeat this process for nums2, pushing the values
//into the second array in answer if the same conditions for nums2 are met. We return answer once we
//exit the second loop.