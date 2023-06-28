// You are given an integer array target and an integer n.

// You have an empty stack with the two following operations:

// "Push": pushes an integer to the top of the stack.
// "Pop": removes the integer on the top of the stack.

// You also have a stream of the integers in the range [1, n].

// Use the two stack operations to make the numbers in the stack 
// (from the bottom to the top) equal to target. You should follow the following rules:

// If the stream of the integers is not empty, pick the next integer
// from the stream and push it to the top of the stack.

// If the stack is not empty, pop the integer at the top of the stack.

// If, at any moment, the elements in the stack (from the bottom to the top) are equal to target, 
// do not read new integers from the stream and do not do more operations on the stack.

// Return the stack operations needed to build target following the mentioned rules. 
// If there are multiple valid answers, return any of them.

/**
 * @param {number[]} target
 * @param {number} n
 * @return {string[]}
 */
var buildArray = function(target, n) {
    let str = [];
    let j = 0;
    for(let i = 1; i <= n; i++){
        if(target[j] == i){
            str.push("Push");
            j++;
            if(j == target.length){
                return str;
            }
        }
        else{
            str.push("Push");
            str.push("Pop");
        }
        //console.log(str);
    }
    return str;
};

//We declare the string array which will contain all of the push/pop operations performed, and
//value j to keep track of which element in the target array we are checking. We start at 0 for
//target to ensure we start at the first element of the array, but start at 1 in the for loop and
//go to n, not n - 1, since the input stream and the target array contains numbers between 1 and n.
//If the current target value we are checking is equal to i, we only do a push statement, since
//that value is in target, we do not want to remove it. We then increment j by 1 to start checking
//the next value. After this, we check if j is equal to the length of the target, meaning we are
//checking if we have found all of the values in target. If we have, we return str, because if we
//were to keep going, push and pop would constantly be added for each additional value. If the
//value we are checking for is not equal to the target, we do push and pop. For example, if target
//is [1,3], and we are at 2, so far, str = ["Push"], since 1 has been found in the target array.
//For 2, since it is not in the target array, we would first need to push it into target [1,2], then
//pop it [1], because if we were to not pop it, it would not equal [1,3], and this is the array we
//are trying to build. We return str at the end of the for loop.