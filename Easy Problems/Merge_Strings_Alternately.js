//You are given two strings word1 and word2. 
//Merge the strings by adding letters in alternating order, starting with word1. 
//If a string is longer than the other, append the additional letters onto the end of the merged string.

//Return the merged string.

/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    let size = 0;
    let arr = [];
    if(word1.length > word2.length){
        size = word1.length;
    }
    else{
        size = word2.length;
    }
    for(let i = 0; i < size; i++){
        arr.push(word1.charAt(i));
        arr.push(word2.charAt(i));
    }
    return arr.toString().replace(/,/g, '');
};

//We declare a size variable to track which given string has a longer length, and an array to store the
//merged string. We use an if statement to check if the length of the first word is larger than the
//second word. If it is, we set the size to be the length of the first word. Otherwise, if they are
//equal or the second word is larger, size is set to the length of the second word. We use a for loop
//to traverse through whichever string is larger, and at each index we push the character of each
//strings' respective index. We then convert the array back into a string, remove any commas using the
//replace() function, then return that. 