// Given an integer array sorted in non-decreasing order, there is exactly one 
// integer in the array that occurs more than 25% of the time, return that integer.

/**
 * @param {number[]} arr
 * @return {number}
 */
var findSpecialInteger = function(arr) {
    let count = 1;
    let currentNumber = arr[0];
    for(let i = 1; i < arr.length; i++){
        if(arr[i] == currentNumber){
            count++;
            if(count > arr.length / 4){
                return arr[i];
            }
        }
        else{
            currentNumber = arr[i];
            count = 1;
        }
    }
    return currentNumber;
};

//We declare a count variable to keep track of how many times we find a specific number, and a 
//currentNumber variable to keep track of which element we are currently counting. We use a for loop
//to traverse arr, starting at 1, since currentNumber was initialized to the first element and count
//initialized to 1. If the current element is equal to currentNumber, we increment count by 1, then
//check if count is greater than the length of the array divided by 4, which is 25% of the length. If
//it is, we return the current element, but returning currentNumber would yield the same result. If
//currentNumber is different from the current element, we change currentNumber to this element and
//reset count to 1. If we exit the for loop, we return currentNumber as a failsafe.