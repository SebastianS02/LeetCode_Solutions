//Given an integer x, return true if x is a palindrome, and false otherwise.

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    const num = x.toString();
    const array = num.split("");
    var j = array.length-1;
    for(var i = 0; i < array.length / 2; i++){
        if(array[i] != array[j]){
            return false;
        }
        j--;
    }
    return true;
};

// This code converts the given integer into a string with the toString function, then splits that string
// into an array at every character, meaning each character has its own index in the array. We then assign
// a new variable j the length of this new array minus one, to prevent an out of bounds error. After that,
// we iterate only through half of the array, because if the array/integer is a palindrome, after reaching
// the halfway mark, we would be checking the same elements, but reversed. First, we check the first and last
// elements of the array, and if they are equal, we move on to the second and second-to-last elements,
// and so on. If at any point the two elements being checked do not match, we return false and the program ends.
// If we reach the end of the for loop before that happens, we return true.