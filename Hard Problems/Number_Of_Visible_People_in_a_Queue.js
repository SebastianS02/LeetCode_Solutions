// There are n people standing in a queue, and they numbered from 0 to n - 1 in left to right order.
// You are given an array heights of distinct integers where
// heights[i] represents the height of the ith person.

// A person can see another person to their right in the queue if everybody in between is shorter
// than both of them. More formally, the ith person can see the jth person if i < j and min(heights[i],
// heights[j]) > max(heights[i+1], heights[i+2], ..., heights[j-1]).

// Return an array answer of length n where answer[i] is the number
// of people the ith person can see to their right in the queue.

/**
 * @param {number[]} heights
 * @return {number[]}
 */
var canSeePersonsCount = function(heights) {
    let answer = [];
    let count = 0;
    let tallest = 0;
    let cut = false;
    for(let i = 0; i < heights.length - 1; i++){
        for(let j = i + 1; j < heights.length; j++){
            //console.log("i: " + i + "  j: " + j);
            //console.log(count);
            if(heights[i] < heights[j]){
                //console.log("Found taller person, pushing count + 1");
                cut = true; 
                answer.push(count + 1);
                break;
            }
            else if(heights[j] > tallest){
                //console.log("Tallest person shorter than ith person found");
                tallest = heights[j];
            }
            if(heights[j] < tallest){
                //console.log("Shorter person behind tallest found");
                count--;
            }
            count++;
        }
        if(!cut){
            answer.push(count);
        }
        cut = false;
        count = 0;
        tallest = 0;
    }
    answer.push(0);
    return answer;
};

//We declare the answer array which will store how many people the ith person in heights can see, a
//count variable to count how many people the ith person can see, a tallest variable to keep track of
//the tallest person the ith person can see so far, and a cut variable to track if the traversal of
//the second for loop is cut short. We use a double for loop to compare each element with all of the
//elements after it. If the current element (i) we are checking is less than an element we are checking
//ahead of it (j), this means the jth person is taller than the ith person, so we push count + 1 to
//the array, count holding how many people the ith person can see, plus one to include the jth person.
//We then break the inner loop because there is no need to check the further elements/people, as the
//ith person will not be able to see any person over the person who is taller than them. We also set
//cut to true, since the iteration of the inner loop was cut short. This is because if a person taller
//than the ith person is never found, then a count value for that person will never be pushed to answer.
//So, we set cut to true, then when we exit the inner loop, we check if the inner loop was not cut, and
//push count to the array if it was not. This is our way of ensuring count is always pushed exactly once
//to answer after every iteration of the outer loop. Going back to the inner loop, if jth person is
//shorter than the ith person, we now check to see if this person is the tallest person we have found
//so far. If it is, we reassign the tallest person to the jth person. We do this because the ith person
//will not be able to see anyone shorter than the tallest person. Hence, in the next if statement, we
//check if the jth person is shorter than the tallest person after the ith person. If this is the case,
//the person will not be visible to the ith person, so we decrement count by 1, since at the end of
//every iteration of the inner loop, we increment count by 1, as this means this person is visible to
//the ith person. The decrement of count cancels that operation out. Every time we exit the inner loop,
//we reset cut to false, as well as count and tallest to 0, as these variables are meant to track this
//information for each element/person, so every time the ith person changes, the variables must be reset.
//Once we exit the outer loop, we push 0 to the array, since the outer loop does not include the last
//element of heights, as it will always lead to 0 in answer, and we return answer.