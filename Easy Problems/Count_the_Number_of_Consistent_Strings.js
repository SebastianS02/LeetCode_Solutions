// You are given a string allowed consisting of distinct characters and an array of strings words. 
// A string is consistent if all characters in the string appear in the string allowed.

// Return the number of consistent strings in the array words.

/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function(allowed, words) {
    let count = 0;
    let consistent = true;
    for(let i = 0; i < words.length; i++){
        for(let j = 0; j < words[i].length; j++){
            if(!(allowed.includes(words[i].charAt(j)))){
                consistent = false;
                break;
            }
        }
        if(consistent){
            count++;
        }
        consistent = true;
    }
    return count;
};

//We declare a count variable to track how many consistent words we find, and a consistent variable
//which will be either true or false if the current word is consistent or not. We use a nested for
//loop, with the outer loop traversing the words array, and the inner loop traversing the entire word
//we are currently checking. If at any point we find a letter that is not in allowed, we set consistent
//to false and break the inner loop, as there is no need to further check the word. If this condition
//is never met, we will exit the inner loop after checking the entire word and consistent will still
//be true. In that case, count will be incremented by 1. We reset consistent to true before the next
//iteration of the outer loop. Once we exit the outer loop, we return count.