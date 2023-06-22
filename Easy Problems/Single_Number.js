// Given a non-empty array of integers nums, every element appears twice except for one. 
// Find that single one.

// You must implement a solution with a linear runtime complexity and use only constant extra space.

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    nums.sort(function(a,b){return a-b});
    //console.log(nums);
    //console.log(nums.length);
    for(let i = 0; i < nums.length; i+=2){
        if(nums[i] != nums[i+1]){
            //console.log(nums[i]);
            return nums[i];
        }
    }
};

//We sort the given array nums in non-decreasing order, then use a for loop to traverse through the
//now sorted array. If the current element is not equal to the next element, this means this element
//only appears once, since in a sorted array, each duplcate of an element should be right next to each
//other. We return this number. If the two elements are equal, the for loop does i+=2, which moves i
//two elements ahead, since that is where the next unique number should be, and we check again.