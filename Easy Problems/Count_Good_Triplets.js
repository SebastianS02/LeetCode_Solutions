// Given an array of integers arr, and three integers a, b and c. 
// You need to find the number of good triplets.

// A triplet (arr[i], arr[j], arr[k]) is good if the following conditions are true:

// 0 <= i < j < k < arr.length
// |arr[i] - arr[j]| <= a
// |arr[j] - arr[k]| <= b
// |arr[i] - arr[k]| <= c
// Where |x| denotes the absolute value of x.

// Return the number of good triplets.

/**
 * @param {number[]} arr
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 */
var countGoodTriplets = function(arr, a, b, c) {
    let count = 0;
    for(let i = 0; i < arr.length; i++){
        for(let j = i + 1; j < arr.length; j++){
            for(let k = j + 1; k < arr.length; k++){
                if(Math.abs(arr[i] - arr[j]) <= a &&
                    Math.abs(arr[j] - arr[k]) <= b &&
                    Math.abs(arr[i] - arr[k]) <= c){
                        count++;
                }
            }
        }
    }
    return count;
};

//We declare a count variable to keep track of the amount of good triplets we find. We use a triple
//for loop to check all possible triplet combinations in the array. The first for loop will start at
//0, the second will start one after the first for loop, and the third will start one after the second
//for loop to avoid checking duplicates. All for loops will go through the entire array, meaning the
//first condition is automatically satisfied. We check the other three conditions using a for loop
//inside the third for loop, using Math.abs() to find absolute value. If all of the conditions are
//satisfied, we increment count by 1, otherwise we do nothing and continue to the next iteration. Once
//we exit all of the for loops, we return count.