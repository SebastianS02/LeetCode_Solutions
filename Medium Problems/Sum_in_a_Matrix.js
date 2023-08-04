// You are given a 0-indexed 2D integer array nums. Initially, your score is 0. 
// Perform the following operations until the matrix becomes empty:

// From each row in the matrix, select the largest number and remove it. 
// In the case of a tie, it does not matter which number is chosen.

// Identify the highest number amongst all those removed in step 1. Add that number to your score.
// Return the final score.

/**
 * @param {number[][]} nums
 * @return {number}
 */
var matrixSum = function(nums) {
    let largestNumInRow = -1;
    let largestNumRemoved = -1;
    let score = 0;
    while(nums[0].length){
        for(let i = 0; i < nums.length; i++){
            for(let j = 0; j < nums[i].length; j++){
                if(nums[i][j] > largestNumInRow){
                    largestNumInRow = nums[i][j];
                }
            }
            if(largestNumInRow > largestNumRemoved){
                largestNumRemoved = largestNumInRow;
            }
            nums[i].splice(nums[i].indexOf(largestNumInRow), 1);
            largestNumInRow = -1;
        }
        score += largestNumRemoved;
        largestNumRemoved = -1;
    }
    return score;
};

//We declare three variables: one to store the largest value in a row of the matrix, one to store the
//largest value of the values removed from each row, and one to store the score we will be returning.
//We use a nested for loop to traverse the matrix. In the inner for loop, we are finding the largest
//element in the row specified by the outer for loop. Once we exit the for loop, we check to see if
//the value we find is greater than the largest value we have removed so far (defaulted at -1 for the
//first iteration, as is the variable for the largest value found in the row). If it is, we store that
//value, then splice the array so that the largest value in the row we just checked is removed from
//the matrix. Once we have done that, we have removed the largest value of each row, so we add the
//largest of those values we removed to score, then reset the variable it was stored in back to -1. 
//All of this is put in a while loop so that it continuously does this until the first row is empty
//(though if the first row is empty, it is guaranteed that the whole matrix is empty). We return
//score once we exit the while loop.