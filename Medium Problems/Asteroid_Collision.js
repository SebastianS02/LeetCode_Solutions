// We are given an array asteroids of integers representing asteroids in a row.

// For each asteroid, the absolute value represents its size, and the sign represents its direction
//  (positive meaning right, negative meaning left). Each asteroid moves at the same speed.

// Find out the state of the asteroids after all collisions. If two asteroids meet,
//  the smaller one will explode. If both are the same size, both will explode. 
//  Two asteroids moving in the same direction will never meet.

/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function(asteroids) {
    for(let i = 0; i < asteroids.length; i++){
        // console.log(i);
        // console.log(i+1);
        if(((asteroids[i] > 0) && (asteroids[i+1] < 0))){
            //console.log("first if");
            if(Math.abs(asteroids[i]) > Math.abs(asteroids[i+1])){
                asteroids.splice(i+1, 1);
                //console.log("first check");
            }
            else if(Math.abs(asteroids[i]) < Math.abs(asteroids[i+1])){
                asteroids.splice(i, 1);
                //console.log("second check");
            }
            else{
                asteroids.splice(i, 2);
            }
            i-=2;
        }
        //console.log("iteration");
    }
    return asteroids;
};

//We use a for loop to traverse through the asteroid array. We first check if the current element is
//positive and the next element is negative, signifying that the two asteroids are going to collide.
//If this is true, we now need to check which element has a larger absolute value, and we remove the
//element with the smaller absolute value from the array. If the two values are equal, we remove both
//values from the array. Assuming the asteroids were heading towards each other, we decrement i by 2,
//so that for the next iteration, we start two elements prior, ensuring that we do not skip over any
//elements we haven't checked, also taking into account the fact that the array has been altered,
//meaning two asteroids that previously may not have been traveling towards each other now are. We
//return the array once we exit the for loop.