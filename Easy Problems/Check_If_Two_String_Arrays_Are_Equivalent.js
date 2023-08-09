// Given two string arrays word1 and word2, return true if the
// two arrays represent the same string, and false otherwise.

// A string is represented by an array if the array elements concatenated in order forms the string.

/**
 * @param {string[]} word1
 * @param {string[]} word2
 * @return {boolean}
 */
var arrayStringsAreEqual = function(word1, word2) {
    let finalWord1 = "";
    let finalWord2 = "";
    for(let i = 0; i < word1.length; i++){
        finalWord1 = finalWord1.concat(word1[i]);
    }
    for(let j = 0; j < word2.length; j++){
        finalWord2 = finalWord2.concat(word2[j]);
    }
    if(finalWord1.localeCompare(finalWord2) == 0){
        return true;
    }
    return false;
};

//We declare two variables finalWord1 and finalWord2, which will store the concatenation of all string
//elements in the given word1 and word2 arrays, respectively. We use two separate for loops to iterate
//through the word1 and word2, concatenating each element with finalWord1 or finalWord2. Once both
//loops are finished, we use an if statement and the localeCompare() function to compare the two
//strings. If they are equivalent, the function will return 0, so in that case we will return true.
//Otherwise, we return false.