// A phrase is a palindrome if, after converting all uppercase letters into lowercase
// letters and removing all non-alphanumeric characters, it reads the same forward and backward. 
// Alphanumeric characters include letters and numbers.

// Given a string s, return true if it is a palindrome, or false otherwise.

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let newStr = s.replace(/[^A-Za-z0-9]/g, '');
    newStr = newStr.toLowerCase();
    //console.log(newStr);
    let j = newStr.length - 1;
    for(let i = 0; i < newStr.length / 2; i++){
        if(newStr[i] != newStr[j]){
            return false;
        }
        j--;
    }
    return true;
};

//We create a new variable newStr to mutate the original string by removing all non alphanumeric
//characters from it, since in test cases where the given string s includes non alphanumeric 
//characters, these characters are removed from the string being tested. The strings being tested
//also have no upper case letters, so we use the toLowerCase method and reassign newStr to it, since
//this method does not change the original string, reassigning it is necessary. We then create a new
//variable j which will start at the end of the string. We use a for loop i which starts at the
//beginning of the new string, and we check the first element with the last element, the second
//element with the second to last element, and so on. If at any point we find that the two elements
//being compared are not equal, the string is not a palindrome, and we return false. Otherwise, if we
//reach the halfway mark of the string, there is no point of going further, since we would just be 
//checking the same elements in reverse order, the palindrome is valid, we exit the for loop and 
//return true.