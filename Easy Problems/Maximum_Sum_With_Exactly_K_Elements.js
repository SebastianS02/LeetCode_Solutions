// You are given a 0-indexed integer array nums and an integer k.
// Your task is to perform the following operation exactly k times in order to maximize your score:

// Select an element m from nums.
// Remove the selected element m from the array.
// Add a new element with a value of m + 1 to the array.
// Increase your score by m.

// Return the maximum score you can achieve after performing the operation exactly k times.

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximizeSum = function(nums, k) {
    let largest = 0;
    for(let i = 0; i < nums.length; i++){
        if(nums[i] > largest){
            largest = nums[i];
        }
    }
    let num = 0;
    while(k > 0){
        num += largest;
        largest++;
        k--;
    }
    return num;
};

//We declare a variable largest to keep track of the largest value in the array. We use a for loop to
//traverse through the array, and for every iteration, we check if the current element is larger than
//the largest value we have stored so far. If it is, we store that value in largest. Once we exit the
//for loop, we declare a variable num, and we will add largest into it k times using a while loop. For
//every iteration of the while loop, we add largest into num, increment largest by 1, and subtract k
//by 1, and repeat this until k is 0. Once this is done, we return num. Although the question asks to
//change the array, that is not done here as it has no effect on what num will be.