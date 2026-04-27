//Given an integer x, return true if x is a palindrome, and false otherwise.

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    return x === Number(x.toString().split('').reverse().join(''));
};

//This code is fairly simple with JavaScript's built-in functions and can be done with one line as shown here.
//First we need to convert the input x to a string using toString(), then turn it into an array using split('').
//With this split, each digit of the number will be its own element in the array. Next, we reverse the array's
//elements using reverse(), and then turn the array back into a string using join(''). Finally, we convert this
//newly reversed string back into a number by casting it with Number(...). Now, we have our input number reversed,
//which if the original input is a palindrome, will be equal to this number, which we check with x === ... .