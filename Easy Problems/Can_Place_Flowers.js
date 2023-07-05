// You have a long flowerbed in which some of the plots are planted, and some are not. 
// However, flowers cannot be planted in adjacent plots.

// Given an integer array flowerbed containing 0's and 1's, where 0 means empty and 1
// means not empty, and an integer n, return true if n new flowers can be planted in
// the flowerbed without violating the no-adjacent-flowers rule and false otherwise.

/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
    for(let i = 0; i < flowerbed.length; i++){
        //console.log(flowerbed[i-1]);
        if(flowerbed[i] == 0 && 
            (flowerbed[i-1] == 0 || flowerbed[i-1] == undefined) && 
            (flowerbed[i+1] == 0 || flowerbed[i+1] == undefined)){
                n--;
                i++;
        }
        if(n <= 0){
            return true;
        }
    }
    return false;
};

//We use a for loop to traverse through the given array. If the current element is 0, and the elements
//adjacent to it are 0 or undefined(to check if the current element is either the first or last element
//of the array), then we decrement n by 1 because a possible location for the flower has been found,
//and we increment i by 1, because we want to skip over the next element, since we now know that the
//element we just checked will have a flower, meaning its adjacent elements cannot have flowers on them.
//If at any point in the for loop n reaches or falls below 0, we return true, since this indicates that
//we have found spots for all of the flowers we wish to plant. If we exit the for loop, this means we
//still have flowers leftover despite finding all possible planting locations, so we return false.