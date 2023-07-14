// Given a positive integer n, find the sum of all integers in
// the range [1, n] inclusive that are divisible by 3, 5, or 7.

// Return an integer denoting the sum of all numbers in the given range satisfying the constraint.

/**
 * @param {number} n
 * @return {number}
 */
var sumOfMultiples = function(n) {
    let sum = 0;
    for(let i = 3; i <= n; i++){
        if(i % 3 == 0 ||
            i % 5 == 0 ||
            i % 7 == 0){
                sum += i;
        }
    }
    return sum;
};

//We declare a variable to store the sum of all values we find that will satisfy the problems
//condition. We use a for loop to check all numbers between 3 and the given n value. We start at 3
//and not at 1 because 1 and 2 will always not be divisible by either 3, 5, or 7. While 3 is always
//divisible by 3, we do not start there and have sum initialized to 3 to ensure that we do not get
//an incorrect answer should n be less than 3. We use the modulus operator to check if the number
//we are checking is evenly divisible by 3, 5, or 7. If it is, we add it to the sum variable. If it
//is not, we do nothing and continue to the next number. We return the sum variable once we exit the
//for loop.