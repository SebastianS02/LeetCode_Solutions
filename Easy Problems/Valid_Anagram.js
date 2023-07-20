// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// An Anagram is a word or phrase formed by rearranging the letters of a different
// word or phrase, typically using all the original letters exactly once.

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length != t.length){
        return false;
    }
    let arr1 = s.split('').sort();
    let arr2 = t.split('').sort();
    for(let i = 0; i < arr1.length; i++){
        if(arr1[i] != arr2[i]){
            return false;
        }
    }
    return true;
};

//We first check if the length of the two strings are equal. If they are not, they cannot be anagrams
//because not every character will appear in both strings since one will not have enough. If they are
//of equal length, we create two arrays by splitting the strings at each character, then sorting the
//array. Now, we can use a for loop and check if the characters at the same indices of both strings
//are equal. If at any point we find this is not true, the strings are not valid anagrams, and we
//return false. If we make it through the for loop, they are valid anagrams, so we return true.