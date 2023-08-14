// An integer n is strictly palindromic if, for every base b between 2 and n - 2
// (inclusive), the string representation of the integer n in base b is palindromic.

// Given an integer n, return true if n is strictly palindromic and false otherwise.

// A string is palindromic if it reads the same forward and backward.

/**
 * @param {number} n
 * @return {boolean}
 */
var isStrictlyPalindromic = function(n) {
    let str = "";
    for(let i = 2; i <= n - 2; i++){
        str = n.toString(i);
        for(let j = 0; j < str.length / 2; j++){
            if(str.charAt(j) != str.charAt(str.length - 1 - j)){
                return false;
            }
        }
    }
    return true;
};

//Before getting into the solution, it is worth noting that for this problem, the answer will always be
//false. This is because any n converted from base 10 to base n - 2 returns 12, excluding 4 to base 2,
//which returns 100. This is still not palindromic, so no matter what n between 4 and infinity, n 
//converted to its n-2 base will not be palindromic. Regardless, a way to check is still shown in the
//code above. We declare an empty string to store n in a different base. We use a for loop to check all
//bases between 2 and n-2. In each iteration, we convert n to a string with i as its base, and store it
//in str. We then use a nested for loop to traverse the string, but only to its halfway point. In this
//for loop, we compare the first and last element, then second and second to last element, etc. If at
//any point the two characters are not equal, we return false. If we exit both for loops (which will
//never happen), we return true.