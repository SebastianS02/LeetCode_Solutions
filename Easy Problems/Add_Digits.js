// Given an integer num, 
// repeatedly add all its digits until the result has only one digit, and return it.

/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    let str = num.toString();
    let newNum = 0;
    while(str.length > 1){
        for(let i = 0; i < str.length; i++){
            newNum += Number(str.charAt(i));
        }
        str = newNum.toString();
        newNum = 0;
        //console.log(str);
    }
    return str.valueOf();
};

//We declare a string and initialize it to the given num after running the toString() function on it.
//We also declare a newNum variable. We use a while loop to check if the length of the string is 1 
//after adding the digits of the current number. We use a for loop to add the value of each digit in
//the string into newNum by changing the current element of the string back into a number. Once we
//exit the for loop, newNum will have the sum of the digits, so we convert it into a string and replace
//the old string in str with this one and reset newNum to 0 in case the while loop runs again. If the
//length of this string is not greater than 1, meaning there is only one digit, the while loop does not
//run again, and we return the value of str.