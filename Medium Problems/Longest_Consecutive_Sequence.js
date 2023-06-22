// Given an unsorted array of integers nums, return the length of the
// longest consecutive elements sequence.

// You must write an algorithm that runs in O(n) time.

/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    if(nums.length == 0){
        return 0;
    }
    nums.sort(function(a,b){return a-b});
    let count = 1;
    let largestCount = 1;
    for(let i = 0; i < nums.length; i++){
        if(nums[i] != nums[i+1]){
            if(nums[i] + 1 >= nums[i + 1]){
                count++;
                if(largestCount < count){
                    largestCount = count;
                }
            }
            else{
                count = 1;
            }
        }
        
    }
    return largestCount;
};

//First we have essentially what is a null check. If the length of the array is 0, return 0, as
//there cannot be a sequence if there are no numbers. Next, we sort the array in non descending
//order. We then create two variables, count and largestCount. Count will keep track of the current
//sequence, since now that the array is sorted, we can track the sequence as we traverse through
//the array with each element. Count will reset if the next number in the sequence is not found. 
//LargestCount will keep track of the largest sequence, and will be replaced by count if count ever
//becomes larger than it. We use a for loop to traverse the now sorted array. First, we check to make
//sure that the next element is not equal to the current element, since we do not include duplicates
//in a sequence. If this is the case, we can now check if the current element plus 1 is equal to the
//next element, since now that the array is sorted, the next element should be one greater than the 
//current element. If this is the case, we increment count by 1 since a sequence has been found, or 
//it is continuing. We then check to see if count has surpassed largestCount, in other words, is our
//current sequence larger than our last known largest sequence. If it is, we replace our last known
//largest sequence with the current one. If the next element is not equal to the current element plus
//1, the sequence has been broken, and we reset count to 1. We return largestCount once we exit the
//for loop.