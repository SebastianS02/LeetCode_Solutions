// Given an array nums containing n distinct numbers in the range [0, n], 
// return the only number in the range that is missing from the array.

/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let check = 0;
    let i = 0;
    while(i <= nums.length){
        if(nums[i] == check){
            check++;
            i = 0;
        }
        else{
            i++;
        }
        if(i == nums.length){
            return check;
        }
    }
    return nums.length;
};

//We declare a check variable to track what number we are looking for, always starting at 0. We
//also declare an i variable to track our place in the array as we iterate through it using the while
//loop. While i is less than or equal to the length of the array (since the array will always start at 0,
//if every element is accounted for, we should be able to exit the loop because with every iteration, i
//increases by 1, meaning if we find every number, i will be greater than the length of the array), we 
//check to see if the current element is equal to the number we are looking for, always starting at index 0.
//If we find it, increase check by 1, reset i to 0, and we check for the next number all over again. If we do
//not find it, go to the next element. If i is equal to the length of the array, meaning we checked every variable
//and could not find check, we return check, as that is the number we could not find. If we do find every number,
//we will exit the while loop and return the length of the array.