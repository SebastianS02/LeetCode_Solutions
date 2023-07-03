// Given a 1-indexed array of integers numbers that is already sorted in non-decreasing order, 
// find two numbers such that they add up to a specific target number. 
// Let these two numbers be numbers[index1] and numbers[index2] where 
// 1 <= index1 < index2 < numbers.length.

// Return the indices of the two numbers, index1 and index2, 
// added by one as an integer array [index1, index2] of length 2.

// The tests are generated such that there is exactly one solution. 
// You may not use the same element twice.

// Your solution must use only constant extra space.

/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let arr = [];
    for(let i = 0; i < numbers.length; i++){
        for(let j = i + 1; j < numbers.length; j++){
            if(numbers[i] + numbers[j] == target){
                arr[0] = i + 1;
                arr[1] = j + 1;
                return arr;
            }
        }
    }
};

//We declare an array to hold the indices of the two values that add up to the target. Since the size
//of the array will always be 2, we consider the the space of it O(1), or constant extra space, since
//it will never be different based on the input or anything else in the program. We use a double for
//loop to traverse through the array and check each value with every other value in the array. If at
//any point we find that the sum of two values equals the target, we assign the first and second element
//of the array we created the indices of these values plus one, as stated by the question, then return
//the array. We do not do anything outside the for loop, as the question has guaranteed that there will
//always be exactly one solution.