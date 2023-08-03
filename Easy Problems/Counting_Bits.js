// Given an integer n, return an array ans of length n + 1 such that for each i 
// (0 <= i <= n), ans[i] is the number of 1's in the binary representation of i.

/**
 * @param {number} n
 * @return {number[]}
 */

var countBits = function(n) {
    let arr = [];
    let str = "";
    let count = 0;
    for(let i = 0; i <= n; i++){
        str = i.toString(2);
        for(let j = 0; j < str.length; j++){
            if(str.charAt(j) == '1'){
                count++;
            }
        }
        arr.push(count);
        count = 0;
    }
    return arr;
};

//We declare the array we will be returning, as well as a string variable to store the number in
//binary form and a count variable to count how many times we find a 1 in the binary number. We use a
//for loop to check all numbers between 0 and n inclusive. First, we convert the current number into
//a string using toString(2), and then use another for loop to check each digit of the binary number,
//incrementing count by 1 if we find a 1. Once we exit the nested for loop, we push count into the
//array we created, then reset count to 0. Once we do this for all numbers between 0 and n inclusive,
//we return the array.