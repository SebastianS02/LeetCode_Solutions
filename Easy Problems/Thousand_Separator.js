//Given an integer n, add a dot (".") as the thousands separator and return it in string format.

/**
 * @param {number} n
 * @return {string}
 */
var thousandSeparator = function(n) {
    let str = n.toString();
    let arr = str.split('');
    //console.log(arr);
    for(let i = arr.length - 3; i >= 0; i-=3){
        arr.splice(i, 0, '.');
    }
    if(arr[0] == '.'){
        arr.splice(0, 1);
    }
    let newStr = arr.toString().replace(/,/g, '');
    return newStr;
};

//We declare a new string variable and initialize it to the value of n with the toString() function
//applied to it, which is simply n converted to a string. We then declare an array, and split the
//newly created string into it at every element, meaning each character in the string has its own
//index in the array. We start at the third to last element in the array, and move backwards by 3
//spaces at each iteration, using the splice() function to insert a '.' every time. Once we exit the
//for loop, we check to make sure the first element of the array isn't a '.', and remove it if it is.
//We convert the array back into a string, and remove any commas using the replace() function, then
//return the string.