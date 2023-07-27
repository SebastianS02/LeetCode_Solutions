// You are given an array nums consisting of positive integers.

// You have to take each integer in the array, reverse its digits, and add it to the end of the array.
// You should apply this operation to the original integers in nums.

// Return the number of distinct integers in the final array.

/**
 * @param {number[]} nums
 * @return {number}
 */
var countDistinctIntegers = function(nums) {
    let num = nums.length;
    for(let i = 0; i < num; i++){
        if(nums[i] >= 10){
            nums.push(Number(nums[i].toString()
            .split('')
            .reverse()
            .toString()
            .replaceAll(',', '')));
        }
        
    }
    nums.sort(function(a,b){return a-b});
    for(let j = 0; j < nums.length; j++){
        while(nums[j] == nums[j+1]){
            nums.splice(j, 1);
            j--;
        }
    }
    return nums.length;
};

//We declare a variable to store the original arrays length, as we will be changing it as we add the
//reverse values of the elements to the end of the array, which would lead to an infinite for loop if
//we were to simply use nums.length. For each element, we check if it is greater than or equal to 10 
//first, because if it is not, the reverse of a single digit number would just be itself, leading to a
//duplicate element, which we do not want. If it is greater than or equal to 10, we change the element
//to a string with toString(), split it at each character into an array, reverse the array, change it
//back into a string, remove all commas, then cast it back into a Number type and push it to nums.
//Once we have done this for all valid values, we sort nums in a non-decreasing order, and use another
//for loop to traverse it once more. Inside the for loop, we use a while loop to remove all duplicates
//by constantly removing the current element if it is equal to the next element. Once this is done, we
//return the length of nums, as it will now only contain the distinct integers of its original and 
//reversed elements. 