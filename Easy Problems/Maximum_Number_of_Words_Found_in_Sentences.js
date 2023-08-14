// A sentence is a list of words that are separated by
// a single space with no leading or trailing spaces.

// You are given an array of strings sentences, where each sentences[i] represents a single sentence.

// Return the maximum number of words that appear in a single sentence.

/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function(sentences) {
    let arr = [];
    let mostWords = 0;
    for(let i = 0; i < sentences.length; i++){
        arr = sentences[i].split(" ");
        if(arr.length > mostWords){
            mostWords = arr.length
        }
    }
    return mostWords;
};

//We declare an empty array which will store each element of sentences after splitting it at each
//space, and a mostWords variable to track which element so far has had the most words in it. We use
//a for loop to traverse sentences, and at each iteration, we split the current element into an array
//at each space " ", so every element in that array is a word from the string. This means that the
//length of this array will be the amount of words found in the string, so we just compare the length
//with our mostWords variable. If it is larger than what we currently have found, we replace mostWords
//with the length of arr. We return mostWords once we exit the for loop.