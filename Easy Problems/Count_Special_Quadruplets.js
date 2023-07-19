// Given a 0-indexed integer array nums, 
// return the number of distinct quadruplets (a, b, c, d) such that:

// nums[a] + nums[b] + nums[c] == nums[d], and
// a < b < c < d

/**
 * @param {number[]} nums
 * @return {number}
 */
var countQuadruplets = function(nums) {
    let count = 0;
    for(let i = 0; i < nums.length; i++){
        for(let j = i + 1; j < nums.length; j++){
            for(let k = j + 1; k < nums.length; k++){
                for(let l = k + 1; l < nums.length; l++){
                    if(nums[i] + nums[j] + nums[k] == nums[l]){
                        count++;
                    }
                }
            }
        }
    }
    return count;
};

//We declare a count variable to track how many special quadruplets we have found. We use a quadruple
//for loop to traverse the array and check every possible 4-number combination. The first for loop
//starts at 0, the second for loop starts one after the first for loop, the third for loop will start
//one after the second for loop, and the fourth for loop will start one after the third for loop. This
//is done to avoid checking the same combinations, and also checks the the array from left to right, 
//meaning the first condition given by the problem will always be true. Inside the fourth for loop, we
//use an if statement to check the second condition. If it is true, we increment count by 1, otherwise,
//we do nothing and move to the next iteration. Once we exit the first for loop, all combinations have
//been checked, so we return count.