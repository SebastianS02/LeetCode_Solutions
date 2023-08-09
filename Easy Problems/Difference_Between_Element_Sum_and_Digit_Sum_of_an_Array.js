// You are given a positive integer array nums.

// The element sum is the sum of all the elements in nums.
// The digit sum is the sum of all the digits (not necessarily distinct) that appear in nums.
// Return the absolute difference between the element sum and digit sum of nums.

// Note that the absolute difference between two integers x and y is defined as |x - y|.

/**
 * @param {number[]} nums
 * @return {number}
 */
var differenceOfSum = function(nums) {
    let elementSum = 0;
    let digitSum = 0;
    let str = "";
    for(let i = 0; i < nums.length; i++){
        elementSum += nums[i];
        str = nums[i].toString();
        for(let j = 0; j < str.length; j++){
            digitSum += Number(str.charAt(j));
        }
    }
    return Math.abs(elementSum - digitSum);
};

//We declare the elementSum and digitSum variables and an empty string variable. We use a for loop to
//traverse nums, and at each iteration, we first add the current element into elementSum, as this
//variable will hold the sum of all elements in nums. Once we do that, we convert the element into a
//string using toString(), and store it in the str variable we declared earlier. We then use another
//for loop to traverse the string, and at each character, we convert it into a number by casting
//the Number datatype onto it, and add that value into digitSum. What this does is sum each digit of
//the current element we are checking. Once we exit the outer for loop, we use Math.abs() to find the
//absolute difference between elementSum and digitSum, and return that value.