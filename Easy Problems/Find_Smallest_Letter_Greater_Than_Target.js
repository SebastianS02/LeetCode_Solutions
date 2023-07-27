// You are given an array of characters letters that is sorted in non-decreasing order,
// and a character target. There are at least two different characters in letters.

// Return the smallest character in letters that is lexicographically greater than target. 
// If such a character does not exist, return the first character in letters.

/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function(letters, target) {
    for(let i = 0; i < letters.length; i++){
        if(letters[i] > target){
            return letters[i]
        }
    }
    return letters[0];
};

//We use a for loop to traverse the given letters array. Since letters is sorted lexographically in
//a non-decreasing order, if we find an element larger than target, this will always be the smallest
//letter greater than target, so we return that element immediately. If we make it through the entire
//for loop without finding this value, there is no such value, so we return the first element of
//letters as the question asks.