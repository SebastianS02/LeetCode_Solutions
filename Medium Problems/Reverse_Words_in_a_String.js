// Given an input string s, reverse the order of the words.

// A word is defined as a sequence of non-space characters. 
// The words in s will be separated by at least one space.

// Return a string of the words in reverse order concatenated by a single space.

// Note that s may contain leading or trailing spaces or multiple spaces between two words. 
// The returned string should only have a single space separating the words. 
// Do not include any extra spaces.

/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    s = s.trim();
    s = s.replace(/\s+/g, ' ');
    //console.log(s);
    let arr = s.split(" ");
    //console.log(arr);
    let temp = "";
    for(let i = 0; i < arr.length / 2; i++){
        temp = arr[i];
        arr[i] = arr[arr.length-1-i];
        arr[arr.length-1-i] = temp;
    }
    let str = arr.toString().replaceAll(',', ' ');
    //console.log(str);
    return str;
};

//We first trim the given string s to remove and leading or trailing whitespace. We then replace
//any extra spaces between the words using the replace function, and replacing all extra spaces with
//just one space. After that, we split the string into an array by spaces, meaning every word will
//be its own element, assuming each word is separated by a single space. We then declare a temp
//variable as we will be swapping the words in the array to reverse the string. To traverse the array,
//we use a for loop, and only go halfway through the array, as if we were to go through the entire
//array swapping the opposite elements, we would undo our work after the halfway point and end up
//with the original string. We swap the first element with the last element, then the second to last
//element with the second element, and so on until the halfway point is reached. Once we exit the for
//loop, we convert the array back into a string with toString, and replace and commas with spaces.
//We return this string.