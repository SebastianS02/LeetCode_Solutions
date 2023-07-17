//Given a binary array nums, return the maximum number of consecutive 1's in the array.

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let largestCount = 0;
    let count = 0;
    for(let i = 0; i < nums.length; i++){
        if(nums[i] == 1){
            count++;
            if(count > largestCount){
                largestCount = count;
            }
        }
        else{
            count = 0;
        }
    }
    return largestCount;
};

//We declare count to track how many consecutive ones have been found, and largestCount, to keep
//track of the largest number of consecutive ones found. We use a for loop to traverse through the
//given array. If the current element equals 1, we increment count, otherwise we set count to 0, as
//either the streak has been broken or has not started yet. If the element is 1 and count is now
//larger than largestCount, we set largestCount equal to count. We return largestCount once we exit
//the for loop.