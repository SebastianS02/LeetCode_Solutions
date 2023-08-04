// Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).

// Return the running sum of nums.

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    let sum = 0;
    let runningSum = [];
    for(let i = 0; i < nums.length; i++){
        for(let j = 0; j <= i; j++){
            sum += nums[j];
            //console.log(sum);
        }
        runningSum[i] = sum;
        //console.log(nums);
        sum = 0;
    }
    return runningSum;
};

//We declare a sum variable to store the running sum of an element, and a runningSum array to store
//all of the running sums of each element. We use a for loop to traverse the array, then use a nested
//for loop to calculate the running sum from 0 to a certain element. So, for each element, we add every
//value from index 0 to its index into sum, then store that value into its index in runningSum, and
//reset sum to 0 for the next element. Once we do this for every element, we return runningSum.