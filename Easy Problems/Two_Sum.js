/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var number = [];
    for(var i = 0; i < nums.length; i++){
        for(var j = 0; j < nums.length; j++){
            if(nums[i] + nums[j] == target && i != j){
                number[0] = i;
                number[1] = j;
                return number;
            }
        }
    }
};