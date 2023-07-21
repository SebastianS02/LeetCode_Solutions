// There are n kids with candies. You are given an integer array candies, where each candies[i]
// represents the number of candies the ith kid has, and an integer extraCandies, denoting the
// number of extra candies that you have.

// Return a boolean array result of length n, where result[i] is true if, after giving the ith
// kid all the extraCandies, they will have the greatest number of candies among all the kids,
// or false otherwise.

// Note that multiple kids can have the greatest number of candies.

/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    let mostCandies = candies[0];
    for(let i = 0; i < candies.length; i++){
        if(candies[i] > mostCandies){
            mostCandies = candies[i];
        }
    }
    for(let i = 0; i < candies.length; i++){
        if(candies[i] + extraCandies >= mostCandies){
            candies[i] = true;
        }
        else{
            candies[i] = false;
        }
    }
    return arr;
};

//We declare a mostCandies array to track the largest element in the array. The first for loop iterates
//through the candies array, finding which element is the largest and setting it equal to mostCandies.
//The second for loop does the same thing, instead it now adds extraCandies to the current element it
//is checking and checks if it is larger than mostCandies, which is now a constant in this for loop. If
//it is, we replace that element with true, otherwise we replace it with false. Once we have replaced
//all elements, we return the array.