// Given a string s and an integer k, return the maximum number
// of vowel letters in any substring of s with length k.

// Vowel letters in English are 'a', 'e', 'i', 'o', and 'u'.

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function(s, k) {
    let currentVowels = 0;
    for(let i = 0; i < k; i++){
        if(s.charAt(i) == 'a' ||
            s.charAt(i) == 'e' ||
            s.charAt(i) == 'i' ||
            s.charAt(i) == 'o' ||
            s.charAt(i) == 'u'){
                currentVowels++;
        }
        //console.log(currentVowels);
    }
    let maxVowels = currentVowels;
    for(let i = k; i < s.length; i++){
        if(s.charAt(i) == 'a' ||
            s.charAt(i) == 'e' ||
            s.charAt(i) == 'i' ||
            s.charAt(i) == 'o' ||
            s.charAt(i) == 'u'){
                currentVowels++;
        }
        if(currentVowels > 0 &&
        (s.charAt(i-k) == 'a' ||
         s.charAt(i-k) == 'e' ||
         s.charAt(i-k) == 'i' ||
         s.charAt(i-k) == 'o' ||
         s.charAt(i-k) == 'u')){
            currentVowels--;
        }
        if(currentVowels > maxVowels){
            maxVowels = currentVowels;
        }
        if(maxVowels > k){
            return k;
        }
        //console.log(currentVowels);
        //console.log(maxVowels);
    }
    return maxVowels;
};

//We declare a currentVowels variable to keep track of how many variables are in the current
//substring we are checking. Our first for loop checks the first substring of the given string,
//incrementing currentVowels by 1 every time a vowel is found. Once we exit this for loop, we
//set maxVowels equal to currentVowels, as we will need to store this information now that
//we will be checking other substrings and comparing the amount of vowels in each one. The second
//for loop starts at the last letter of the next substring. The way this for loop works is it checks
//if the last letter of this substring is a vowel, and if it is, increment currentVowels by 1,
//since the substring is the same as the one we just checked in the previous for loop, with the
//exception of this letter being added and the first letter being removed, we also check if the
//letter that was removed was a vowel. If it was, we subtract currentVowels by 1, otherwise we do
//not change currentVowels, as the letter that was removed from this substring was a consonant.
//If at any point after changing currentVowels it becomes greater than maxVowels, we change
//maxVowels to that value. If it any point in this second for loop maxVowels becomes equal to the
//length of the substring, we immediately return that value, as that is the highest possible number
//of vowels in a substring, and there is no need to proceed in the for loop. Once we exit the for
//loop assuming maxVowels was never equal to k, we return maxVowels.