// Given an integer array arr, return the mean of the remaining integers
// after removing the smallest 5% and the largest 5% of the elements.

// Answers within 10-5 of the actual answer will be considered accepted.

/**
 * @param {number[]} arr
 * @return {number}
 */
var trimMean = function(arr) {
    arr.sort(function(a,b){return a-b});
    let fivePercent = arr.length * 0.05;
    arr = arr.slice(fivePercent, arr.length - fivePercent);
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    return sum / arr.length;
};

//First, we sort the array in increasing order so the smallest values will be on the left and the
//largest values will be on the right. Then, we declare a variable named fivePercent, which will store
//the number that represents 5% of the length of the array. Once we have this, we use slice() to slice
//the array, starting from fivePercent, and ending at the length of the array minus fivePercent. This
//will remove the smallest 5% and largest 5% of the values from the array. Once this is done, we can
//calculate the mean of the array as we normally would. We declare a sum variable to keep track of
//the sum of all the elements, and we use a for loop to traverse the array. Once we have the sum, we
//divide it by the length of the array to get the mean, and return that value.