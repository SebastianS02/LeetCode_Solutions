// Given an integer n, return the number of trailing zeroes in n!.

// Note that n! = n * (n - 1) * (n - 2) * ... * 3 * 2 * 1.

/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function(n) {
    let num = 1n;
    while(n > 0){
        num *= BigInt(n);
        n--;
    }
    //console.log(num);
    let str = num.toString();
    //console.log(str);
    let count = 0;
    for(let i = str.length - 1; i >= 0; i--){
        if(str.charAt(i) != '0'){
            return count;
        }
        count++;
    }
    return count;
};

//We declare num as a BigInt and start it at 1, since 0! is 1, and the problem lets us assume n will
//always be at least 0, since the factorial of a negative number is undefined. We use a while loop
//to find the factorial of n, multipling n casted as a BigInt into num then decrementing n by 1 until
//n is 0. We then use toString to convert num into a string, and declare a count variable which will
//keep track of how many trailing zeroes we find in this string. We use a for loop to traverse through
//the string, starting at the end of the string and moving backwards. If at any point we find that the
//current character we are checking is not 0, we return count. Otherwise, we increment count by 1. If
//we make it to the end of the for loop, we still return count, but returning str.length would yield
//the same result as getting to this point would mean every character in str is a 0.