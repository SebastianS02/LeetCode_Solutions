// Given an integer array nums of positive integers,
// return the average value of all even integers that are divisible by 3.

// Note that the average of n elements is the sum of the n 
// elements divided by n and rounded down to the nearest integer.

/**
 * @param {number[]} nums
 * @return {number}
 */
var averageValue = function(nums) {
    let sum = 0;
    let count = 0;
    for(let i = 0; i < nums.length; i++){
        if(nums[i] % 6 == 0){
            sum += nums[i];
            count++;
        }
    }
    if(count == 0){
        return 0;
    }
    return Math.floor(sum / count);
};

//We declare a sum variable to track the sum of all even numbers divisible by 3, and a count variable
//to track how many times we find a number that satisfies those parameters. We use a for loop to
//traverse nums, and for each element, we check if it is evenly divisible by 6 using the mod operator.
//If it is, we add the element into sums, and increment count by 1. Once we exit the for loop, we can
//calculate the average by dividing the sum by count, using Math.floor() to round down. Before this,
//we must check if count is 0, and return 0 if it is, as to not get an arithmetic error.