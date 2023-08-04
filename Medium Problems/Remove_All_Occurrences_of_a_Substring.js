// Given two strings s and part, perform the following operation
// on s until all occurrences of the substring part are removed:

// Find the leftmost occurrence of the substring part and remove it from s.
// Return s after removing all occurrences of part.

// A substring is a contiguous sequence of characters in a string.

/**
 * @param {string} s
 * @param {string} part
 * @return {string}
 */
var removeOccurrences = function(s, part) {
    while(s.includes(part)){
        s = s.replace(part, '');
    }
    return s;
};

//We use a while loop to constantly traverse through s, using the includes() function to check if part
//occurs in s. If it does, we reassign s to itself after replacing the occurrence of part with an
//empty string, since simply doing s.replace(...) would not do anything, as the replace() function
//does not change the original string. Once we exit the while loop, we return s.