// The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, 
//      such that each number is the sum of the two preceding ones, starting from 0 and 1. That is,

// F(0) = 0, F(1) = 1
// F(n) = F(n - 1) + F(n - 2), for n > 1.

// Given n, calculate F(n).

/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    if(n == 0 || n == 1){
        return n;
    }
    return fib(n-1) + fib(n-2);
};

//We use recursion for this problem. First, we check if the given number is 0 or 1, since the 
//Fibonacci number at 0 or 1 is just itself. If this is not the case, we return the fibonacci numbers
//of one less than the given number and two less than the given number. The function will continuously
//run until the input is 0 or 1.