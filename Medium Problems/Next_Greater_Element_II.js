// Given a circular integer array nums (i.e., the next element of nums[nums.length - 1]
// is nums[0]), return the next greater number for every element in nums.

// The next greater number of a number x is the first greater number to its traversing-order
// next in the array, which means you could search circularly to find its next greater number.
// If it doesn't exist, return -1 for this number.

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function(nums) {
    let n = nums.length;
    let arr = [];
    let largerFound = false;
    for(let i = 0; i < nums.length; i++){
        for(let j = 0; j < n; j++){
            if(nums[(j + i) % n] > nums[i]){
                largerFound = true;
                arr.push(nums[(j + i) % n]);
                break;
            }
        }
        if(!largerFound){
            arr.push(-1);
        }
        largerFound = false;
    }
    return arr;
};

//We declare a variable to store the length of nums, an array to store the next greater elements of
//each element, and a largerFound variable to track if we have found the next greater element. We use
//a double for loop to traverse the circular array. The inner loop starts at 0 and goes to n because
//if it were to go from i+1 to nums.length, it would not check the previous indices of the current
//element, which is why we needed to declare n earlier. This way, the inner loop will always run n
//times, where n is nums.length. We use an if statement to check if the current element of the inner
//loop is larger than the current element of the outer loop. Since this is a circular array, to check
//every element, we need to do nums[j + i] % n. What this will do is start at i, then check every
//element until the end of the array. Once it reaches the end of the array, the % n will start being
//used so that after checking the last element, it will then check the first element, then the second,
//and so on until i is reached again. If the next greater element is found, we set largerFound to true,
//push that element into arr, and break the inner loop so we do not overwrite it with a different
//greater element. In the outer loop, we check if largerFound is false, so we push -1 if a value was
//never found, then set largerFound to false to prepare it for the next iteration of the outer loop.
//We return arr once we exit the outer loop. 