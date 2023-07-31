// You are given two positive integers n and k. 
// A factor of an integer n is defined as an integer i where n % i == 0.

// Consider a list of all factors of n sorted in ascending order, 
// return the kth factor in this list or return -1 if n has less than k factors.

/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var kthFactor = function(n, k) {
    let count = 0;
    for(let i = 1; i <= n; i++){
        if(n % i == 0){
            count++;
            if(count == k){
                return i;
            }
        }
    }
    return -1;
};

//We declare a count variable to keep track of how many factors of n we find. We use a for loop to
//check all values between 1 and n, inclusive. If n modulo the current number we are checking is 0,
//this means i evenly divides n, meaning it is a factor. Therefore, we increment count and check if
//count is equal to k. If it is, we return i. If we make it through the for loop, we never found the
//kth factor of n, so we return -1.