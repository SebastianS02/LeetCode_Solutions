// Given an array nums of integers, return how many of them contain an even number of digits. 

/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function(nums) {
    let count = 0;
    for(let i = 0; i < nums.length; i++){
        if(nums[i].toString().length % 2 == 0){
            count++;
        }
    }
    return count;
};

//We declare a count variable to keep track of how many numbers have an even number of digits. We use
//a for loop to traverse nums. At each element, we convert it into a string using toString(), and check
//to see if its length mod 2 returns 0, or if it is evenly divisible by 2. If it is, we increment count
//by 1. We return count once we exit the for loop.