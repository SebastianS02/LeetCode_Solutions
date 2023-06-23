// You are given a string s consisting of lowercase English letters. 
// A duplicate removal consists of choosing two adjacent and equal letters and removing them.

// We repeatedly make duplicate removals on s until we no longer can.

// Return the final string after all such duplicate removals have been made. 
// It can be proven that the answer is unique.

/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function(s) {
    let arr = s.split("");
    for(let i = 0; i < arr.length; i++){
        if(arr[i] == arr[i+1]){
            arr.splice(i, 2);
            i-=2;
        }
        if(arr.length == 0){
            return "";
        }
        //console.log(arr);
    }
    arr = arr.toString().replace(/,/g, '');
    return arr;
};

//We declare an array to split the given string at each character. We use a for loop to traverse
//through this array, and at each element, we check of the current element is equal to the adjacent
//element. If this is true, we splice these elements from the array, and subtract i by 2 to ensure
//we do not skip any elements. If at any point, the length of the array is 0, we return an empty
//string, as the for loop will never recognize this on its own, and would loop infinitely. Once
//we exit the for loop, we convert the array back into a string with toString(), and we use
//.replace(/,/g, ''), with replaces all commas in the string (put there by the array) with empty
//spaces. We return this string.