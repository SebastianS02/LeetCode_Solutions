//Given an integer array of size n, find all elements that appear more than ⌊n/3⌋ times.

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function(nums) {
    nums.sort(function(a,b){return a-b});
    //console.log(nums);
    //console.log(nums.length);
    let arr = [];
    let count = 1;
    for(let i = 0; i < nums.length; i++){
        if(nums[i] == nums[i+1]){
            count++;
        }
        else if(nums[i] != nums[i+1] && count > nums.length/3){
            arr.push(nums[i]);
            count = 1;
        }
        else{
            count = 1;
        }
    }
    return arr;
};

//We first sort the array in non-decreasing order. We then declare an empty array that will store the
//elements that appear more than n/3 times, and a count variable to keep track of how many times a
//certain element appears, starting at 1, because we know the element will appear at least once. We 
//use a for loop to traverse through the array, and at every element we check if the current element
//is equal to the next one. If it is, we increment count by 1. If it is not, but count is greater than
//n/3, we push that value into the array we created earlier, and reset count to 1. Otherwise, we just
//reset count to 1. When we exit the for loop, we return arr.