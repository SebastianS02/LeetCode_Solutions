// Write an algorithm to determine if a number n is happy.

// A happy number is a number defined by the following process:

// Starting with any positive integer, replace the number by the sum of the squares of its digits.
// Repeat the process until the number equals 1 (where it will stay), 
//      or it loops endlessly in a cycle which does not include 1.
// Those numbers for which this process ends in 1 are happy.

// Return true if n is a happy number, and false if not.

/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    var sum = 0;
    while(sum != 1){
        var string = n.toString().split("");
        var array = string.map(i => {
            return Number(i);
        });
        //console.log(array);
        for(var i = 0; i < array.length; i++){
            sum += array[i] * array[i];
        }
        if(sum == 1){
            return true;
        }
        if(sum == 4){
            return false;
        }
        n = sum;
        sum = 0;
    }
};

//We declare a sum variable, then run a while loop to constantly check if sum is not 1. 
//We use the toString function to turn n into a string, then split it at each character. 
//We then map the string into an array, then turn each element back into an integer so we
//can perform mathematical functions and checks on it. Once that is done, we use a for loop
//to iterate through the array, squaring each number in the array and adding it to a sum. This
//is done because since the number is in an array, we cannot simply do, for example, 345*345.
//We instead do 5*5 + 40*40 + 300*300, which yields the same result as squaring 345. If the sum is
//ever equal to 1, we return true and the program ends. Through testing, we determined that if the sum
//ever reaches 4, the program will loop endlessly, thus if 4 is detected, end the program to prevent
//an infinite loop by returning false.