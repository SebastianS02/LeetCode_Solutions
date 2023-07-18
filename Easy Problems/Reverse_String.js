// Write a function that reverses a string. The input string is given as an array of characters s.

// You must do this by modifying the input array in-place with O(1) extra memory.

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    return s.reverse();
};

//Due to JavaScript's .reverse() function, this question is very easy. The .reverse() function will
//reverse any array in O(n) time using O(1) extra memory. 