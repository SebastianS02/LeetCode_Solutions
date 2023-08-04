// You are given a 0-indexed integer array nums, where nums[i] is a digit between 0 and 9 (inclusive).

// The triangular sum of nums is the value of the only element
// present in nums after the following process terminates:

// 1. Let nums comprise of n elements. If n == 1, end the process.
// Otherwise, create a new 0-indexed integer array newNums of length n - 1.

// 2. For each index i, where 0 <= i < n - 1,
// assign the value of newNums[i] as (nums[i] + nums[i+1]) % 10, where % denotes modulo operator.

// 3. Replace the array nums with newNums.

// 4. Repeat the entire process starting from step 1.

// Return the triangular sum of nums.

/**
 * @param {number[]} nums
 * @return {number}
 */
var triangularSum = function(nums) {
    let newNums = [];
    while(nums.length > 1){
        for(let i = 0; i < nums.length - 1; i++){
            newNums.push((nums[i] + nums[i+1]) % 10)
        }
        nums = newNums;
        newNums = [];
    }
    return nums[0];
};

//We declare the newNums array to store the new nums each time the process is completed. We use a
//while loop to continuously run this process until the length of nums reaches 1. We then use a for
//loop to traverse nums, and for every iteration, we add the current element with the next element,
//then do modulus 10 on that number and push it into newNums. It is worth mentioning that we stop at
//the second to last index of nums, since the last index will not have another element to be summed
//with. Once we exit the for loop, we reassign nums to be newNums, then reset newNums to be empty,
//and as per the while loop, this will repeat until nums only has one number. Once we exit the while
//loop, we return the first and only element of nums.