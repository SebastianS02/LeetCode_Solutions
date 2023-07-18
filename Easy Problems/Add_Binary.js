// Given two binary strings a and b, return their sum as a binary string.

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    let num1 = 0n;
    let num2 = 0n;
    let exponent = 0n;
    for(let i = a.length - 1; i >= 0; i--){
        if(a.charAt(i) == '1'){
            num1 += 2n ** exponent;
        }
        exponent++;
    }
    exponent = 0n;
    //console.log(num1);
    for(let j = b.length - 1; j >= 0; j--){
        if(b.charAt(j) == '1'){
            num2 += 2n ** exponent;
        }
        exponent++;
    }
    //console.log(num2);
    let num3 = num1 + num2;
    //console.log(num3);
    return num3.toString(2);
};

//We declare two BigInts to store the decimal value of the given binary strings, and an exponent
//variable to keep track of what power of two we will be adding when we find a 1. We use a for loop to
//traverse both strings, starting at the end of the string, or the LSB, and moving backwards. If the
//current character we are checking is a 1, we use JavaScript's exponentiation operator ** to do 2 to
//the power of our current exponent value, and add that to the respective num variable. The reason we
//do not use Math.pow() is because this function does not work with BigInts. After every iteration in
//the for loop, we increase the exponent by 1. Before checking the second string, we reset the exponent
//to 0. Once we exit the second for loop, we declare a new num3 variable to store the sum of the two
//strings, then convert it back into a binary string using toString(2), and return that value.