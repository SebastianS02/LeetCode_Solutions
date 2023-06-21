// Given an unsorted integer array nums, return the smallest missing positive integer.

// You must implement an algorithm that runs in O(n) time and uses constant extra space.

/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    let count = 1;
    nums.sort(function(a,b){return a-b})
    console.log(nums);
    for(let i = 0; i < nums.length; i++){
        if(nums[i] < 1){
            null;
        }
        else if(nums[i] == count){
            count++;
        }
        else if(nums[i] < count){
            null;
        }
        else{
            return count;
        }
    }
    return count;
};

//We declare a variable count to keep track of the positive integers we find in the array, starting at 1. 
//We then sort the given array in a non-decreasing order. After that, we use a for loop to traverse through
//the array. If we find a value less than 1, meaning the value is not positive, we do nothing and move on
//to the next value in the for loop, hence the null line. If the value we're checking is equal to count,
//that means this positive integer is not missing, and we can increment count by 1 to check for the next
//positive integer. If we find a value less than count, we also do nothing and move on to the next value
//in nums. This if statement is to check for duplicates. If we do not find a value equal to count, this
//means count is the positive integer missing from the array, and we return it. If we get through the
//entire array, count will be incremented one over the largest positive integer in the array, meaning
//it is also the first missing positive integer.

//Essentially what this code does is sort the array, remove any value less than 0, then check for each
//positive integer, starting at 1. If an integer is missing, it returns that number. If not, it returns
//the largest number in the array plus 1.