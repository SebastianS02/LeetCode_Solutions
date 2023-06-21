// Given two strings needle and haystack, return the index of the first occurrence 
// of needle in haystack, or -1 if needle is not part of haystack.

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    return haystack.indexOf(needle);
};

//Very simple due to JavaScripts built in indexOf() function. Running this function on haystack
//with the needle paramater searches for the string in needle in the string haystack, and returns
//the index of the first occurence of needle in haystack. If it is not found, it returns -1.