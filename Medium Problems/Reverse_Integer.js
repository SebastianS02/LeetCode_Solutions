// Given a signed 32-bit integer x, return x with its digits reversed.
// If reversing x causes the value to go outside the signed 32-bit integer range [-2^31, 2^31 - 1], then return 0.

// Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let negative = false;
    if(x < 0){
        negative = true;
        x *= -1;
    }
    let reversedNum = Number(x.toString().split("").reverse().join(''));
    if(negative){
        reversedNum *= -1;
        if(reversedNum < -2147483648) return 0;
        return reversedNum;
    } else {
        if(reversedNum > 2147483649) return 0;
        return reversedNum;
    }
};

//We start by instantiating a variable "negative" to false to track if our input is negative.
//This is because we do not want to include the "-" symbol when reversing the string later, but also
//don't want to forget that our input is negative, or mistakenly reverse an originally positive integer
//to a negative one. Next, we check to see if our input is less than zero, in other words, negative. If it is,
//we set our variable "negative" to true and multiply our input by -1 to turn it positive. If this condition ends
//up being false, we do nothing, meaning our "negative" tracker will remain false and our input remains unchanged.
//Next, we instantiate a variable "reversedNum" to our input which we convert to a string using toString(), then
//convert it into an array with each character being its own element using split(""), we then reverse the order of
//the array, and finally convert it back into a string using join(''). Doing this has essentially reversed the integer
//and turned it into a string, so the last step as part of instantiating the variable is turning it into a number by
//using the Number(...) cast. Now that we have our reversed integer, we must check if the input was negative using
//our "negative" tracker variable. If it was set to true, we multiply reversedNum by -1 to turn it negative.
//Next, we check if our negative number is outside our 32-bit range on the negative end by checking if it's less than
//-2147483648. If it is, we return 0, otherwise we return reversedNum. If our input was positive, meaning "negative"
//was false, we'll instead check if our reversed number is outside the 32-bit range on the positive end by checking if
//it is greater than 2147483649 we return 0, otherwise we return our reversed number.