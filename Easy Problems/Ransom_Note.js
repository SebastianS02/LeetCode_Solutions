// Given two strings ransomNote and magazine, return true if ransomNote can
// be constructed by using the letters from magazine and false otherwise.

// Each letter in magazine can only be used once in ransomNote.

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    let count = 0;
    for(let i = 0; i < magazine.length; i++){
        if(magazine.charAt(i) == ransomNote.charAt(count)){
            magazine = magazine.replace(magazine.charAt(i), '');
            count++;
            i = -1;
            //console.log(magazine);
        }
        if(count == ransomNote.length){
            return true;
        }
    }
    return false;
};

//We declare a count variable to keep track of which ransomNote letter we are searching for in the
//magazine. We use a for loop to traverse through magazine. If we find an element that is equal to
//the letter we are searching for in ransomNote, we replace that element in magazine with nothing,
//essentially deleting it from magazine, then increment count by 1 to start checking for ransomNote's
//next letter, and reset i to -1 so we can start at the beginning of magazine. If at any point count
//is equal to ransomNote's length, this means all of the letters in ransomNote have been found in
//magazine, and we can return true. If we exit the for loop, this means this condition was never
//satisfied, so we return false.