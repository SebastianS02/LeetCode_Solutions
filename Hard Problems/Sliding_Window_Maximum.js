// You are given an array of integers nums, there is a sliding window of size k which is moving from
// the very left of the array to the very right. You can only see the k numbers in the window. 
// Each time the sliding window moves right by one position.

// Return the max sliding window.

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
    let arr = [];
    for(let i = 0; i <= nums.length - k; i++){
        let largest = nums[i];
        for(let j = i; j < k+i; j++){
            if(nums[j] > largest){
                largest = nums[j];
            }
        }
        arr.push(largest);
    }
    return arr;
};

//We declare an array to store the max value of each sliding window. We use a for loop to traverse
//through the array, and declare a variable to store the largest value of the current sliding window,
//which we default to the first value at each iteration. We use a nested for loop to traverse through
//the sliding window array and find the largest value in it by comparing each element with the largest
//value we have stored. If the current element is larger, this value becomes our largest value. When
//we exit the nested for loop, we push the largest value into the array we declared at the beginning,
//and the next iteration of the first for loop begins, resetting the largest value and checking the
//next window. The first for loop starts at 0, or the very left of the array, and goes to the length
//of the array minus the given k value, since the sliding window should remain the same length. For
//the nested for loop, we start at i, and go to k, the length of the sliding window, plus i. For
//example, the first iteration of the nested for loop would find the max value of indices 0-2 assuming
//k is 3, then 1-3, 2-4, etc. We return the array we made once we exit the main for loop.