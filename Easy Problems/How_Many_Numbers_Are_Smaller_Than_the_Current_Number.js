// Given the array nums, for each nums[i] find out how many numbers in the array are smaller than it.
// That is, for each nums[i] you have to count the number of valid j's such that
// j != i and nums[j] < nums[i].

// Return the answer in an array.

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
    let count = 0;
    let arr = [];
    for(let i = 0; i < nums.length; i++){
        for(let j = 0; j < nums.length; j++){
            if(nums[j] < nums[i]){
                count++;
            }
        }
        arr.push(count);
        count = 0;
    }
    return arr;
};

//We declare a count variable to keep track of how many smaller numbers we find than the current
//element we will be checking, and an array to store the count for each element. We use a nested
//for loop, the first one will go through the entire array once, while the second one will compare
//the current element of the first for loop with each element in the array. It will be checking to
//see which elements are smaller than the current element, incrementing count by 1 each time a 
//smaller element is found. Once we exit the inner for loop, we push the value of count into the
//array, then reset it to 0. Once we exit the outer for loop, we return the array we created.