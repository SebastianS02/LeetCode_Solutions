// Given the array of integers nums, you will choose two different indices i 
// and j of that array. Return the maximum value of (nums[i]-1)*(nums[j]-1).

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    let largest = 0;
    let secondLargest = 0;
    for(let i = 0; i < nums.length; i++){
        if(nums[i] > largest && nums[i] > secondLargest){
            secondLargest = largest;
            largest = nums[i];
        }
        else if(nums[i] > secondLargest){
            secondLargest = nums[i];
        }
    }
    return (largest - 1) * (secondLargest - 1)
};

//We declare two variables to store the largest and second largest values of the array. We use a for
//loop to traverse the array. If the current value is greater then both the largest and second largest
//values we have stored, we move the current largest value down to the second largest, and assign the
//current value to our largest value. Otherwise, if the current value is only larger than the second
//largest value we have stored, we just replace that value with the current value. If none of these
//conditions are true, we do nothing and move to the next element in the array. Once we have traversed
//the array, we return the product of the largest and second largest values, both decremented by 1.