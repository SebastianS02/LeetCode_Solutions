// Given two sorted arrays nums1 and nums2 of size m and n respectively, 
//      return the median of the two sorted arrays.

// The overall run time complexity should be O(log (m+n)).

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let mergedArr = nums1.concat(nums2);
    mergedArr.sort(function(a,b){return a-b});
    //console.log(mergedArr);
    //console.log(mergedArr.length / 2);
    //console.log(Math.trunc(mergedArr.length / 2));
    if(mergedArr.length % 2 === 1){
        return mergedArr[Math.trunc(mergedArr.length / 2)];
    }
    return ((mergedArr[mergedArr.length / 2]) + 
        (mergedArr[(mergedArr.length / 2) - 1])) / 2;
};

//First we concatenate the two given arrays using .concat() and store the new array into mergedArr.
//Then we use our own sort function, which properly sorts numeric values from lowest to highest. 
//The reason we do not just use .sort() is because in JS the .sort() function compares string values,
//therefore, if there are negative numbers, the array will be incorrectly sorted. For example, [-3, 2, -1]
//would return [-1, 2, -3]. Once the array is sorted, we check to see if the number of elements is odd by
//doing the length of the array modulus 2. If we get 1, the number of elements is odd, and the median of the
//array is simply the middle element, which can be found by dividing the length of the array by 2. This alone,
//however, returns a decimal value, therefore we must use Math.trunc to turn the number into an integer. 
//The "| 0" and "Math.floor" strategies will not work because if the number is negative, it will return
//an incorrect answer. If the number of elements is even, we return the two middle elements, which can be found
//by dividing the length of the array by 2 for one, then the element before that one is the other middle element,
//then dividing those values by 2 to find the median.