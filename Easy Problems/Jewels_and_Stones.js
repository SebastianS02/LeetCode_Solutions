// You're given strings jewels representing the types of stones that are jewels,
// and stones representing the stones you have. Each character in stones is a type of 
// stone you have. You want to know how many of the stones you have are also jewels.

// Letters are case sensitive, so "a" is considered a different type of stone from "A".

/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
    let count = 0;
    for(let i = 0; i < stones.length; i++){
        if(jewels.includes(stones.charAt(i))){
            count++;
        }
    }
    return count;
};

//We declare a count variable to track how many jewels we find in stones. We use a for loop to traverse
//the stones array. For every element, we check if jewels includes that letter. If it does, we
//increment count by 1. We return count once we exit the for loop, meaning we checked every letter of
//stones.