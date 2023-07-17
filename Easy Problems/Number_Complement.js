// The complement of an integer is the integer you get when you flip all
// the 0's to 1's and all the 1's to 0's in its binary representation.

// For example, The integer 5 is "101" in binary and its complement is "010" which is the integer 2.
// Given an integer num, return its complement.

/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function(num) {
    let str = num.toString(2);
    //console.log(str);
    let numComp = 0;
    let exp = 0;
    for(let i = str.length - 1; i >= 0; i--){
        if(str.charAt(i) == 0){
            numComp += Math.pow(2, exp);
        }
        //console.log(numComp);
        exp++;
    }
    return numComp;
};

//We turn the given number into a binary number by using toString with the parameter 2, which
//converts any number into its binary represenation, put in string form. We declare numComp, which
//will hold the complement if the given number, and exp, which will track the exponent of the 2^x
//operation we will be performing. We use a for loop to traverse the string, starting at the end,
//since binary numbers are read from right to left. If the current element we are checking is equal
//to 0, this means the complement of the number would have this bit as 1, so we add 2^x to numComp,
//x being which bit we are checking. If we are checking the rightmost bit, or the LSB, exp would be
//0, so we would add 2^0 = 1 to numComp. The bit after that would be 2^1 = 2, and so on. As shown
//in this example, we increment exp by 1 with each iteration of the for loop. We return numComp once
//we exit the for loop.