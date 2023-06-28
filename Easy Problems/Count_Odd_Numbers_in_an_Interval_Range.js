// Given two non-negative integers low and high. 
// Return the count of odd numbers between low and high (inclusive).

/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var countOdds = function(low, high) {
    let count = 0;
    for(let i = low; i <= high; i++){
        if(i % 2 == 1){
            count++;
        }
    }
    return count;
};

//We declare a count variable to keep track of the number of odd numbers we find in the interval
//range. We use a for loop starting from the low value and stopping at the high value, and we check
//if each element is odd by doing that element modulus 2. If the result is 1, it is odd, and we
//increment count by 1. We return count once we exit the for loop.