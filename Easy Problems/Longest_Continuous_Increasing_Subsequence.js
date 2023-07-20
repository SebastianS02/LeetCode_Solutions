// Given an unsorted array of integers nums, return the length of the longest continuous
// increasing subsequence (i.e. subarray). The subsequence must be strictly increasing.

// A continuous increasing subsequence is defined by two indices l and r (l < r) such that it is
// [nums[l], nums[l + 1], ..., nums[r - 1], nums[r]] and for each l <= i < r, nums[i] < nums[i + 1].

/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function(nums) {
    let count = 1;
    let largestCount = 1;
    for(let i = 0; i < nums.length; i++){
        if(nums[i] < nums[i+1]){
            count++;
            if(count > largestCount){
                largestCount = count;
            }
        }
        else{
            count = 1;
        }
    }
    return largestCount;
};

//We declare a count variable to keep track of a current increasing subsequence, then a largestCount
//variable to keep track of the largest increasing subsequence found so far. We use a for loop to
//iterate through the given array. If the current element is less than the next element, we increment
//count by 1. We then check if count is larger than largestCount. In other words, we have found that
//the current subsequence is/still is increasing, and we are checking if it is larger than any we
//have found so far. If it is, we replace largestCount with count. If the next element is not larger
//than the current element, the subsequence is no longer increasing, so we reset count to 1. Once we
//exit the for loop, we return largestCount.