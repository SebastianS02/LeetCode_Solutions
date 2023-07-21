// Given two strings s and t, return true if s is a subsequence of t, or false otherwise.

// A subsequence of a string is a new string that is formed from the original string by deleting
// some (can be none) of the characters without disturbing the relative positions of the remaining
// characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    if(s.length == 0){
        return true;
    }
    let j = 0;
    for(let i = 0; i < t.length; i++){
        if(t.charAt(i) == s.charAt(j)){
            j++;
            if(j == s.length){
                return true;
            }
        }
    }
    return false;
};

//We first have a type of null check. If s is empty, it will always technically be a subsequence of t,
//so we return true. Otherwise, we declare a variable j to keep track of which letter in s we are
//looking for. We use a for loop to traverse through t. If the current element at t is equal to the
//character we are looking for in s, we increment j by 1 so we can start looking for the next character
//in s. If j is ever equal to the length of s, this means every character in s has been found in t, 
//meaning it is a subsequence, so we return true. We do not have to worry about checking the previous
//letters when checking for one of the s characters in t because a subsequence does not change the order
//of its original sequence. If we make it through the for loop, we return false, because this means not
//every character of s was found in t.