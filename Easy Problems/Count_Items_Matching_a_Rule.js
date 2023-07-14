// You are given an array items, where each items[i] = [typei, colori, namei] describes the
// type, color, and name of the ith item. 
// You are also given a rule represented by two strings, ruleKey and ruleValue.

// The ith item is said to match the rule if one of the following is true:

// ruleKey == "type" and ruleValue == typei.
// ruleKey == "color" and ruleValue == colori.
// ruleKey == "name" and ruleValue == namei.

// Return the number of items that match the given rule.

/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */
var countMatches = function(items, ruleKey, ruleValue) {
    let count = 0;
    let key = 0;
    if(ruleKey == "type"){
        key = 0;
    }
    else if(ruleKey == "color"){
        key = 1;
    }
    else{
        key = 2;
    }
    //console.log(items[0][1]);
    for(let i = 0; i < items.length; i++){
        if(items[i][key] == ruleValue){
            count++;
        }
    }
    return count;
};

//We declare a count variable to keep track of how many items match the rule we are searching for, and
//a key variable to track which attribute of each item we will be checking. Since all of the items have
//type as their first index, we will assign key to 0 if the ruleKey is type. If it is color, we assign
//it 1. If it is neither, this means it is name, which we then assign it 2. We use a for loop to
//traverse the given items list. If the current item we are checking and its key match the value we are
//searching for, we increment count. We return count once we exit the for loop.