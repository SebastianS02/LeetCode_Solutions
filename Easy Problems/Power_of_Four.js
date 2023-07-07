// Given an integer n, return true if it is a power of four. Otherwise, return false.

// An integer n is a power of four, if there exists an integer x such that n == 4^x.

/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfFour = function(n) {
    for(let i = 0; i < 16; i++){
        if(n == Math.pow(4, i)){
            return true;
        }
    }
    return false;
};

//Since the problem parameters state that n will be a number between -2^31 and 2^31-1, we use a for
//loop to check all powers of four between 0 and 16 non-inclusive. This is because 4^15 is the last
//power of three within this range. For example, we will first check if n is equal to 4^0. If it is
//not, we check if n is equal to 4^1, and so on. If at any point our if statement is true, we return
//true. If we exit the for loop, this means our conditional was never met, so we return false.