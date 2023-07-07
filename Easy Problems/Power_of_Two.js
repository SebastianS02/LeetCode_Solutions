// Given an integer n, return true if it is a power of two. Otherwise, return false.

// An integer n is a power of two, if there exists an integer x such that n == 2x.

/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    for(let i = 0; i < 32; i++){
        if(n == Math.pow(2, i)){
            return true;
        }
    }
    return false;
};

//Since the problem parameters state that n will be a number between -2^31 and 2^31-1, we use a for
//loop to check all powers of two between 0 and 32 non-inclusive. For example, we will first check
//if n is equal to 2^0. If it is not, we check if n is equal to 2^1, and so on. If at any point our
//if statement is true, we return true. If we exit the for loop, this means our conditional was never
//met, so we return false.