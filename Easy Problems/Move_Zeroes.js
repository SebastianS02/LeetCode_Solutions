// Given an integer array nums, 
// move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Note that you must do this in-place without making a copy of the array.

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let count = nums.length;
    for(let i = 0; i < count; i++){
        if(nums[i] == 0){
            nums.splice(i, 1);
            nums.push(0);
            count--;
            i--;
        }
    }
};

//We declare a count variable to keep track of how many times we will be iterating through nums. We
//use a for loop to traverse the array, starting at the beginning and going to count, which is
//originally initialized to the length of nums. If at any point we find an element that is zero, we
//remove it from the array using splice(), then push a 0 to the end of the array, essentially moving
//it from that position to the end of the array. We then subtract count by 1 to ensure we do not check
//that 0 again once we reach the end of the array and subtract i by 1 to ensure we do not skip over
//any elements. We do not return anything, as nums is being modified in place.