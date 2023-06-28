//Given a sentence that consists of some words separated by a single space,
//and a searchWord, check if searchWord is a prefix of any word in sentence.

//Return the index of the word in sentence (1-indexed) where searchWord is a prefix of this word. 
//If searchWord is a prefix of more than one word, return the index of the first word (minimum index). 
//If there is no such word return -1.

//A prefix of a string s is any leading contiguous substring of s.

/**
 * @param {string} sentence
 * @param {string} searchWord
 * @return {number}
 */
var isPrefixOfWord = function(sentence, searchWord) {
    let arr = sentence.split(" ");
    for(let i = 0; i < arr.length; i++){
        if(arr[i].startsWith(searchWord)){
            return i + 1;
        }
    }
    return -1;
};

//We declare an array, then split the given string sentence by spaces into the array, so each word
//in sentence is its own element in the array. We use a for loop to iterate through the array, and
//we check if the current element/word occurs has the prefix we are looking for by using the
//startsWith() JS function, which checks if a string starts with the given parameter, which in our
//case is the searchWord string. If the element does contain our searchWord as a prefix, we return
//the index + 1, since the indexes in the array are one behind the actual place of the word in that
//sentence. If we reach the end of the for loop, this means no element matched our criteria, and we
//return -1.