// You are given a 0-indexed array of strings details. 
// Each element of details provides information about a
// given passenger compressed into a string of length 15. The system is such that:

// The first ten characters consist of the phone number of passengers.
// The next character denotes the gender of the person.
// The following two characters are used to indicate the age of the person.
// The last two characters determine the seat allotted to that person.

// Return the number of passengers who are strictly more than 60 years old.

/**
 * @param {string[]} details
 * @return {number}
 */
var countSeniors = function(details) {
    let count = 0;
    for(let i = 0; i < details.length; i++){
        if(details[i].charAt(11) > 6 ||
            (details[i].charAt(11) == 6 && details[i].charAt(12) >= 1)){
                count++;
        }
    }
    return count;
};

//We declare a count variable to keep track of how many times we find a passenger who is more than 60
//years old. We use a for loop to traverse the details array, and for each element, we first check if
//the 11th character in the element is greater than 6, since the 11th character always holds the tens
//digit of the passenger's age. If it is greater than 6, this means they are at least 70, so they are
//a senior citizen. Otherwise, we check to see if it is equal to 6 and the 12th character, which holds
//the ones digit of the passengers age, is greater than or equal to 1. This checks to see if the person
//is between 61-69 inclusive. If either the first or second checks are true, we increment count by 1.
//Once we exit the for loop, we return count.