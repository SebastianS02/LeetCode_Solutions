// There are n employees in a company, numbered from 0 to n - 1.
// Each employee i has worked for hours[i] hours in the company.

// The company requires each employee to work for at least target hours.

// You are given a 0-indexed array of non-negative integers
// hours of length n and a non-negative integer target.

// Return the integer denoting the number of employees who worked at least target hours.

/**
 * @param {number[]} hours
 * @param {number} target
 * @return {number}
 */
var numberOfEmployeesWhoMetTarget = function(hours, target) {
    let count = 0;
    for(let i = 0; i < hours.length; i++){
        if(hours[i] >= target){
            count++;
        }
    }
    return count;
};

//We declare a count variable to track how many employees reached the target. We use a for loop to
//traverse the hours array. In each iteration, we check if the value of the current element is greater
//than or equal to target. If it is, we increment count by 1. We return count once we exit the for loop.
