// You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, 
// and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

// Merge nums1 and nums2 into a single array sorted in non-decreasing order.

// The final sorted array should not be returned by the function, but instead be stored inside
// the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements 
// denote the elements that should be merged, and the last n elements are set to 0 and should
// be ignored. nums2 has a length of n.

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    for(let i = m; i < nums1.length; i++){
        nums1.splice(i, 1);
        i--;
    }
    //console.log(nums1);
    for(let j = n; j < nums2.length; j++){
        nums2.splice(j, 1);
        j--;
    }
    //console.log(nums2);
    for(let k = 0; k < nums2.length; k++){
        nums1.push(nums2[k]);
    }
    nums1.sort(function(a,b){return a-b});
};

//First, we remove any trailing zeroes at the end of the two given arrays by using a for loop.
//We start at m and n for each array respectively, since according to the problem, the actual
//number of elements (not including 0) is m and n. At each element, we use the splice method,
//removing the element from the array and decrementing i by 1 to ensure we do not skip over any
//elements. Once this is done, we use another for loop to push the values of nums2 into nums1. 
//The reason we do not use the .concat() function is because it does not change the original array.
//Once the elements of nums2 have been pushed into nums1, we use a sort function on nums1 to resort
//the newly merged array. We do not return nums1, as requested by the problem.