// You are given a large integer represented as an integer array digits, where each digits[i]
// is the ith digit of the integer. The digits are ordered from most significant to least
// significant in left-to-right order. The large integer does not contain any leading 0's.

// Increment the large integer by one and return the resulting array of digits.

/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    if(digits[digits.length - 1] == 9){
        for(let i = digits.length - 2; i >= 0; i--){
            if(digits[i] != 9){
                digits[i]++;
                //console.log("added 1");
                //console.log(digits);
                for(let j = i + 1; j < digits.length; j++){
                    digits[j] = 0;
                    //console.log("this ran");
                }
                return digits;
            }
        }
        for(let k = 0; k < digits.length; k++){
            digits[k] = 0;
        }
        digits.push(0);
        digits[0] = 1;
        return digits;
    }
    digits[digits.length - 1]++;
    return digits;
};

//We first check if the last number in digits is equal to 9. If it is not, we add one to the last
//element and return digits. If the last element is equal to 9, we keep checking the elements prior
//if they are equal to 9. If at any point we find that the element we are checking is not equal to 9,
//we add one to that element, then change every element to the right of that one to 0. If we do not
//find such an element, this means the entire array is 9's. In this case, we change the entire array
//to zeroes, push an extra 0 to the end of the array, then change the first element in digits to 1.