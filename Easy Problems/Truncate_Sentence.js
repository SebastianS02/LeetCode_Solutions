// A sentence is a list of words that are separated by a single space with no leading or trailing spaces.
// Each of the words consists of only uppercase and lowercase English letters (no punctuation).

// For example, "Hello World", "HELLO", and "hello world hello world" are all sentences.
// You are given a sentence s​​​​​​ and an integer k​​​​​​.
// You want to truncate s​​​​​​ such that it contains only the first k​​​​​​ words.
// Return s​​​​​​ after truncating it.

/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var truncateSentence = function(s, k) {
    return s.split(" ").slice(0, k).toString().replaceAll(',', ' ');
};

//We are able to fit this entire problem into one return statement. First, we split the string s into
//an array at each space, meaning each word will be its own element. Then, we slice the array from
//index 0 to k, meaning anything outside of these bounds will be removed from the array. Once this is
//done, we turn the array back into a string, but doing this leads to commas being inserted between
//each word, so we just use replaceAll() to replace all commas with a space, and that string is
//returned.