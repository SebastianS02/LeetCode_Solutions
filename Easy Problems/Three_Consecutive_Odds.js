// Given an integer array arr, return true if there are
// three consecutive odd numbers in the array. 
 
//  Otherwise, return false.

/**
 * @param {number[]} arr
 * @return {boolean}
 */
var threeConsecutiveOdds = function(arr) {
    for(let i = 0; i < arr.length - 2; i++){
        if(arr[i] % 2 == 1 &&
            arr[i+1] % 2 == 1 &&
            arr[i+2] % 2 == 1){
                return true;
            }
    }
    return false;
};

//We use a for loop to iterate through the array, but stop at the third to last element since we are
//checking the current element and the two elements after it at each iteration. If the current element,
//along with the next two modulo 2 is equal to 1, which checks if they are odd, then we return true,
//ending the program. If we get through the entire for loop, this means there are no three consecutive
//odd numbers in the array, and we return false.