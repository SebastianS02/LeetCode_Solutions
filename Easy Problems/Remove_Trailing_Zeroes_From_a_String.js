// Given a positive integer num represented as a string,
// return the integer num without trailing zeros as a string.

/**
 * @param {string} num
 * @return {string}
 */
var removeTrailingZeros = function(num) {
    let arr = num.split('');
    for(let i = arr.length - 1; i >= 0; i--){
        if(arr[i] == '0'){
            arr.pop();
        }
        else{
            break;
        }
    }
    return arr.toString().replaceAll(',', '').valueOf();
};

//We declare an array to split the string into it. We use a for loop to traverse the array, starting
//at the end and moving towards the beginning. If the current element is a 0, we pop it from the array.
//Otherwise, we break the loop, turn the array back into a string, remove all commas, and return the
//value of it. 