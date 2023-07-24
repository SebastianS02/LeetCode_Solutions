// Given an array of integers temperatures represents the daily temperatures, return an array
// answer such that answer[i] is the number of days you have to wait after the ith day to get
// a warmer temperature. If there is no future day for which this is possible, keep
// answer[i] == 0 instead.

/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    let count = 1;
    for(let i = 0; i < temperatures.length; i++){
        for(let j = i + 1; j < temperatures.length; j++){
            if(temperatures[i] < temperatures[j]){
                temperatures[i] = count;
                break;
            }
            if(j >= (temperatures.length - 1)){
                temperatures[i] = 0;
            }
            count++;
        }
        count = 1;
    }
    temperatures[temperatures.length - 1] = 0;
    return temperatures;
};

//We declare a count variable which will keep track of how many days have gone by since we have not
//found a warmer day from the current one we are checking. We use a for loop to traverse the array,
//then a nested for loop to traverse the array again for each element. For each element, we will
//start at that element and check if one of the following elements is greater than it, incrementing
//count by 1 each time we find it is not, meaning another day passes where the temperature is not
//warmer than the day we are checking. If we do find such a day, we replace the element we were
//checking with count, and break the nested for loop so we can start checking the next element. This
//means the array is being modified in-place. The second if statement checks if j is greater than or
//equal to the length of temperatures minus 1, meaning its checking if we have gone through the entire
//array and have not found a warmer day. If this is the case, replace the day we are checking for with
//0. We automatically set the last element in temperatures to 0, as there are no more days after it to
//check if there are warmer days after it. We return temperatures once all this is done.