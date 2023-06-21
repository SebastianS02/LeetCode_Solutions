// Implement pow(x, n), which calculates x raised to the power n (i.e., xn).

/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    if(n == 0 || x == 1){
        return 1;
    }
    if(x == -1){
        if(n < 0){
            return 1;
        }
        return -1;
    }
    let base = x
    if(n < 0){
        base = 1 / x;
        let newBase = base;
        n = Math.abs(n);
        for(let i = 0; i < n - 1; i++){
            newBase*=base;
        }
        return newBase;
    }
    for(let i = 0; i < n - 1; i++){
        base*=x;
    }
    return base;
};

//We first check for base cases, such as if the exponent is 0 or if the base is 1, which always
//returns 1. We also check if the base is -1, and if the exponent is either positive or negative.
//If the exponent is negative and the base is -1, return 1, else return -1. Once we check those,
//we create a new variable called base to keep track of the base as we will be mutliplying it and 
//changing its original value. If the base is positive, we simply multiply the base by x by the
//n - 1 times, as we originally multiply the base twice on the first iteration, so we must go
//through this for loop one less than the given exponent. We then return the base variable we created,
//as that is the variable being multiplied into. If the exponent is negative, we change the base to
//1 over itself, and use Math.abs() on the exponent which uses absolute value to change the number
//from negative to positive. We then have to create another base variable, as we used the original
//one to store the 1/x number, with x being given to us. We then do the same thing we did in the 
//positive number for loop here, and return the newBase variable.