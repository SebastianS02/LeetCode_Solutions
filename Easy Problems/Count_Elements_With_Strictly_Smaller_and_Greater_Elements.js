// Given an integer array nums, return the number of elements that have
// both a strictly smaller and a strictly greater element appear in nums.

/**
 * @param {number[]} nums
 * @return {number}
 */
var countElements = function(nums) {
    nums.sort(function(a,b){return a-b});
    while(nums[0] == nums[1]){
        nums.splice(0, 1);
    }
    while(nums[nums.length - 1] == nums[nums.length - 2]){
        nums.splice(nums.length - 1, 1);
    }
    if(nums.length <= 1){
        return 0;
    }
    return nums.length - 2;
};

//We use JavaScript's sort() method to sort nums. Once this is done, we can use while loops to
//remove duplicates of the smallest and largest elements of the array, as these elements will not
//have a strictly smaller/larger element. We return the length of the array minus the smallest and
//largest elements, but before that we check to see if the array has been reduced to a size of 1 or
//less, meaning we are checking if the array consisted only of at most two unique values. If this is
//the case, we return 0, as there will be no elements with stricly smaller or larger values.