// You are given an integer n that consists of exactly 3 digits.

// We call the number n fascinating if, after the following modification, the resulting
//  number contains all the digits from 1 to 9 exactly once and does not contain any 0's:

// Concatenate n with the numbers 2 * n and 3 * n.

// Return true if n is fascinating, or false otherwise.

// Concatenating two numbers means joining them together. 
// For example, the concatenation of 121 and 371 is 121371.

/**
 * @param {number} n
 * @return {boolean}
 */
var isFascinating = function(n) {
    let str1 = n.toString();
    let num = 2 * n;
    let str2 = num.toString();
    let result = str1.concat(str2);
    num = 3 * n;
    str2 = num.toString();
    result = result.concat(str2);
    //console.log(result);
    if(result.length != 9){
        //console.log("result not 9 ints long")
        return false;
    }
    let count = 1;
    for(let i = 0; i < result.length; i++){
        if(result.charAt(i) == count){
            count++;
            i = -1;
        }
        if(count == 10){
            return true;
        }
    }
    return false;
};

//We create a variable str1 and store n as a string in it. We then create a num variable to hold the
//result of the 2 * n and 3 * n operations, also creating str2 to hold the string value of that number. 
//We also create a variable result which will hold the final concatenated number of n, 2 * n, and
//3 * n. We first concatenate str1 and str2, storing that in result. We then do 3 * n, and store that
//value in num, converting that into a string and storing it in str2. Finally, we concatenate result
//and str2 one more time to get our final number. Before checking the number, we check to see if it's
//length is 9. If it is not, this means the number will not contain the digits 1-9 exactly once, since
//there will either be too little or too many digits to satisfy that condition, and we immediately
//return false. We declare a count variable to keep track of the digits we have found. We use a for
//loop to iterate through the array, and at each element we check if the number is equal to count,
//meaning have we found this digit yet in the number. If we have, we increment count by 1 to look for
//the next digit, and reset i to -1 so we can start at the beginning of the number. If at any point
//count reaches 10, this means all of the digits 1-9 have been found, and we can return true. If this
//condition is never met, we will exit the for loop and return false.