// Write a function that takes the binary representation of an unsigned integer and
// returns the number of '1' bits it has (also known as the Hamming weight).

// Note:

// Note that in some languages, such as Java, there is no unsigned integer type. In this case, 
// the input will be given as a signed integer type. It should not affect your implementation, 
// as the integer's internal binary representation is the same, whether it is signed or unsigned.

// In Java, the compiler represents the signed integers using 2's complement notation. 
// Therefore, in Example 3, the input represents the signed integer. -3.

/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    let str = n.toString(2);
    let count = 0;
    //console.log(str);
    for(let i = 0; i < str.length; i++){
        if(str[i] === '1'){
            count++;
        }
    }
    return count;
};

//We convert the given integer n to a string using .toString(2). Using 2 as a parameter in the toString
//function converts the string (or in this case, the integer) into binary form. Normally, doing this
//would not work with signed binary values, however the problem only specifies for unsigned, or
//positive integers. We use a for loop to traverse through the string, and increment a count variable
//every time a 1 is found. We return count once we exit the for loop.