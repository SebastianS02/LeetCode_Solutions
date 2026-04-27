// Given an integer array nums, return the greatest common divisor of the smallest number and largest number in nums.

// The greatest common divisor of two numbers is the largest positive integer that evenly divides both numbers.

/**
 * @param {number[]} nums
 * @return {number}
 */
var findGCD = function(nums) {
    let min = nums[0]; let max = nums[0];

    for(let i = 0; i < nums.length; i++){
        if(nums[i] < min) min = nums[i];
        else if(nums[i] > max) max = nums[i];
    }

    while(min > 0 && max > 0){
        if(max > min) max -= min;
        else min -= max;
    }
    if(min < 0 || max < 0) return 1;
    return min > 0 ? min : max;
};

//First, we declare two variables, min and max, and set them both equal to the first element of our input array, nums.
//This is so if all the numbers in the array happen to be equal, we have default values to fall back on. Next, we
//traverse through nums, and for each number, we check if it is smaller than our current min value, overriding ours with
//this one if it is smaller. If it is not, then we instead check if it is larger than our current max value, also
//overriding our current max value with this one if it is larger. If both these checks are not true, this means the number
//is smaller than our max but bigger than our min, therefore of no use to us, so we move onto the next iteration. Once we
//are complete with this for loop, we have our min/max numbers from nums and can move onto finding the GCD of the two. We
//will use the Euclidian algorithm, which works as so:
/*
Euclidean Algorithm:

The Euclidean Algorithm is a method for finding the greatest common divisor (GCD)
of two numbers. It operates on the principle that the GCD of two numbers remains
the same even if the smaller number is subtracted from the larger number.

To find the GCD of n1 and n2 where n1 > n2:
1. Repeatedly subtract the smaller number from the larger number until one of them becomes 0.
2. Once one becomes 0, the other is the GCD of the original numbers.

Example:
n1 = 20, n2 = 15

gcd(20, 15) = gcd(20 - 15, 15) = gcd(5, 15)
gcd(5, 15)  = gcd(15 - 5, 5)  = gcd(10, 5)
gcd(10, 5)  = gcd(10 - 5, 5) = gcd(5, 5)
gcd(5, 5)   = gcd(5 - 5, 5)  = gcd(0, 5)

Hence, return 5 as the GCD.
*/
//So, we create a while loop, which will only end if either of our min or max values dip below 1. If neither of them are
//0 or less, we check if max is greater than min, subtracting min from max if it is true. Otherwise, min is either
//greater than or equal to max, meaning we subtract max from min. Once either max or min is 0 or less, we exit the while
//loop. If either min or max is negative, this means no GCD was found, so we return 1, the universal divisor for any
//number. Otherwise, we check if min is greater than 0. If it is, that means min contains the GCD, so we return min,
//otherwise we return max.