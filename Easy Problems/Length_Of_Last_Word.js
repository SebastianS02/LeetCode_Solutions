// Given a string s consisting of words and spaces, return the length of the last word in the string.

// A word is a maximal substring consisting of non-space characters only.

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let arr = s.split(/(\s+)/).filter(e => e.trim().length > 0);
    return arr[arr.length-1].length;
};

//In the first line, we split the string by all whitespace, meaning one space or five spaces will all
//be grouped as one element when splitting the string, then filter the array based on these whitespaces,
//meaning the final array will only contain the words from the original string. For the return statement,
//we go to the final element of the newly created array, and return its length.