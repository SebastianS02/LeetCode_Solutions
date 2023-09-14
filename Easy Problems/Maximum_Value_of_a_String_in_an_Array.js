// The value of an alphanumeric string can be defined as:

// The numeric representation of the string in base 10, if it comprises of digits only.
// The length of the string, otherwise.

// Given an array strs of alphanumeric strings, return the maximum value of any string in strs.

/**
 * @param {string[]} strs
 * @return {number}
 */
var maximumValue = function(strs) {
    let largest = 0;
    let current = 0;
    let letterFound = false;
    let digits = "0123456789";
    for(let i = 0; i < strs.length; i++){
      for(let j = 0; j < strs[i].length; j++){
        if(!(digits.includes(strs[i].charAt(j)))){
          current = strs[i].length;
          letterFound = true;
          break;
        }
      }
      if(!letterFound){
        current = Number(strs[i]);
      }
      if(current > largest){
        largest = current;
      }
      letterFound = false;
    }
    return largest;
  };

//We declare four variables: The first is largest, which will store the largest value of a string in
//the array as we traverse it; the second is current, which will store the current strings value, the
//third is letterFound, which will change depending on if a string contains a letter, and the last is
//digits, which is a string containing the digits 0-9. We use a for loop to traverse the strs array,
//and for each element, we use another for loop to check if any character in that string is a letter.
//We do this by checking if digits, which contains the numbers 0-9 in string format, does not include
//the current character. If it does not, this means it must be a non-numeric character, which means
//the value of this string is the length of it. We set current to the length of the string, set 
//letterFound to true, and break the inner loop, as there is no need to further traverse the current
//string. If a letter is never found, then letterFound will stay false, as it is initialized as false,
//and the first if statement after the inner loop becomes true. In it, we set current to the current
//string casted as a Number. If current is greater than the value we have stored in largest, we 
//replace largest with the value in current. We reset letterFound to false before the next iteration.
//Once we exit the outer loop, we return largest.