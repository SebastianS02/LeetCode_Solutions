// You are given a string s, which contains stars *.

// In one operation, you can:

// Choose a star in s.
// Remove the closest non-star character to its left, as well as remove the star itself.
// Return the string after all stars have been removed.

// Note:

// The input will be generated such that the operation is always possible.
// It can be shown that the resulting string will always be unique.

/**
 * @param {string} s
 * @return {string}
 */
var removeStars = function(s) {
    let arr = [];
    for(let i = 0; i < s.length; i++){
        if(s.charAt(i) != '*'){
            arr.push(s.charAt(i));
        }
        else{
            arr.pop();
        }
    }
    return arr.toString().replaceAll(',', '');
};

//We declare an array to store the final string. We use a for loop to traverse the string. We check
//each character to see if it is a star. If it is not, we push it to the array. If it is, we pop the
//last element in the array. With this method, we are getting rid of the stars in the string and
//removing the closest character to the left of the star. We then use the toString() method along with
//replaceAll() to convert the array into a string and remove all commas, and return that.