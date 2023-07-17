// We define the usage of capitals in a word to be right when one of the following cases holds:

// All letters in this word are capitals, like "USA".
// All letters in this word are not capitals, like "leetcode".
// Only the first letter in this word is capital, like "Google".

// Given a string word, return true if the usage of capitals in it is right.

/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function(word) {
    if(word.charAt(0).localeCompare(word.charAt(0).toUpperCase()) != 0){
        //console.log("Entered first if / First letter is lowercase");
        for(let i = 1; i < word.length; i++){
            if(word.charAt(i).localeCompare(word.charAt(i).toLowerCase()) != 0){
                return false;
            }
        }
        return true;
    }
    else{
        if(word.charAt(1).localeCompare(word.charAt(1).toUpperCase()) != 0){
            //console.log("Entered second if / First letter is uppercase, second letter is lowercase");
            for(let i = 2; i < word.length; i++){
                if(word.charAt(i).localeCompare(word.charAt(i).toUpperCase()) == 0){
                    return false;
                }
            }
            return true;
        }
        else{
            //console.log("Entered last else / First two letters are uppercase");
            for(let i = 2; i < word.length; i++){
                if(word.charAt(i).localeCompare(word.charAt(i).toUpperCase()) != 0){
                    return false;
                }
            }
            return true;
        }
    }
}

//We first compare the first letter of the string to its upper case counterpart. If the compare
//statement does not return 0, meaning this letter is lowercase, we enter the first for loop. At
//every element we compare the current character to its lowercase counterpart. If at any point this
//comparison does not yield 0, meaning the current letter is uppercase, the usage of this capital is
//incorrect, and we return false. If we make it through the for loop, no capital letter was ever
//found, so we return true. Otherwise, if the first letter is capital, we now must check the second
//letter. We use the same if statement we used previously, changing the index from 0 to 1. If this if
//statement does not return 0, the second letter is lowercase, and we enter the second for loop. In
//this for loop, we will compare each letter with its uppercase counterpart. If comparing these two
//values returns 0, this means the letter is uppercase, and since a lowercase was found earlier, it
//is an incorrect usage of a capital letter, so we return false. If we make it through the for loop,
//another capital letter was never found, so we return true. If the previous if statement was not
//true, this means both the first and second letters were capitals, so we move on to the third and
//final for loop, using a similar if statement from the previous one mentioned. Only this time, we are
//checking if the comparison does not return 0, meaning a lowercase letter has been found, meaning the
//second letter has an incorrect usage of a capital letter, which returns false. If a lowercase letter
//is never found, we return true. 