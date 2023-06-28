// You are given an array of unique integers salary
//  where salary[i] is the salary of the ith employee.

// Return the average salary of employees excluding the minimum and maximum salary. 
// Answers within 10-5 of the actual answer will be accepted.

/**
 * @param {number[]} salary
 * @return {number}
 */
var average = function(salary) {
    salary.sort(function(a,b){return a-b});
    salary.splice(0,1);
    salary.splice(salary.length - 1, 1);
    let sum = 0;
    for(let i = 0; i < salary.length; i++){
        sum += salary[i];
    }
    return sum / salary.length
};

//We sort salary in non-decreasing order, then remove the first and last elements, as in a sorted
//array, the first and last elements will always contain the minimum and maximum values. We declare
//a sum variable and initialize it to 0, then use a for loop to traverse the new salary array,
//adding each element to sum. We then return the sum divided by the length of the array, which is
//the average of the array.