// Given an integer n, return a string array answer (1-indexed) where:

// answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
// answer[i] == "Fizz" if i is divisible by 3.
// answer[i] == "Buzz" if i is divisible by 5.
// answer[i] == i (as a string) if none of the above conditions are true.

/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    let strArr = [];
    for(let i = 0; i < n; i++){
        if((i+1) % 3 == 0 && (i+1) % 5 == 0){
            strArr[i] = "FizzBuzz";
        }
        else if((i+1) % 3 === 0){
            strArr[i] = "Fizz";
        }
        else if((i+1) % 5 == 0){
            strArr[i] = "Buzz";
        }
        else{
            strArr[i] = (i+1).toString();
        }
    }
    return strArr;
};

//We declare an array that will store our result. We use a for loop that starts at 0 and stops at
//n-1, however we are always checking one element ahead, since the example solutions all start at 1,
//but the array index will start at 0. In other words, the elements of our array are equal to their
//index plus 1. At each element, we first check if the index + 1 is divisible by both 3 and 5, since
//if this is the case, there is no need to change the value to Fizz, then Buzz, then FizzBuzz. If the
//value is not divisble by both, we then check if it is divisible by only 3. If it is, we assign our
//current index "Fizz". If this is not the case, we check if it is divisible by 5, which in that case
//we would assign the current index "Buzz". It is worth noting that it does not matter in which order
//we check if the index + 1 is divisible by 3 or 5. If none of these if statements are true, we simply
//assign the current index to itself + 1, converted to a string. When we exit the for loop, we return
//the array.