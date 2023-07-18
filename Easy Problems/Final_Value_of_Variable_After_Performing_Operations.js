// There is a programming language with only four operations and one variable X:

// ++X and X++ increments the value of the variable X by 1.
// --X and X-- decrements the value of the variable X by 1.
// Initially, the value of X is 0.

// Given an array of strings operations containing a list of operations, 
// return the final value of X after performing all the operations.

/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function(operations) {
    let x = 0;
    for(let i = 0; i < operations.length; i++){
        if(operations[i].includes('+')){
            x++;
        }
        else{
            x--;
        }
    }
    return x;
};

//We declare a variable x to keep track of what x is at the moment, initializing it at 0 as per the
//question. We use a for loop to traverse the array and check each element in the operations array.
//We use JavaScript's .includes() function to check if the current element contains a +. If it does,
//we increment x by 1, if it does not, it must contain a -, so we decrement it by 1. There is no need
//to check if it contains "++", as the problem states that the x will only have either two pluses or
//two minuses, so checking for one will suffice. We return x after exiting the for loop.