// Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, 
// and return an array of the non-overlapping intervals that cover all the intervals in the input.

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    //console.log(intervals);
    for(let i = 0; i < intervals.length; i++){
        for(let j = i + 1; j < intervals.length; j++){
            if((intervals[i][0] <= intervals[j][0] && intervals[i][1] >= intervals[j][1])){
                intervals.splice(j,1);
                i = 0;
                j = 0;
                //console.log("ran check 1");
            }
            else if(intervals[i][0] >= intervals[j][0] && intervals[i][1] >= intervals[j][1]
                 && intervals[i][0] <= intervals[j][1]){
                intervals[i][0] = intervals[j][0];
                intervals.splice(j,1);
                i = 0;
                j = 0;
                //console.log("ran check 2");
            }
            else if(intervals[i][0] <= intervals[j][0] && intervals[i][1] <= intervals[j][1]
                 && intervals[i][1] >= intervals[j][0]){
                intervals[i][1] = intervals[j][1];
                intervals.splice(j,1);
                i = 0;
                j = 0;
                //console.log("ran check 3");
            }
            else if(intervals[i][0] >= intervals[j][0] && intervals[i][1] <= intervals[j][1]){
                intervals[i][0] = intervals[j][0];
                intervals[i][1] = intervals[j][1];
                intervals.splice(j,1);
                i = 0;
                j = 0;
                //console.log("ran check 4");
            }
            //console.log(intervals)
        }
    }
    return intervals;
};

//We use a double for loop to go through the intervals array and check each value. For the first if
//statement, we check if the two intervals are equal, or if the second interval falls fully inside of
//the first interval. If it does, we merge the two by removing the second interval. At every check, we
//reset i and j to 0, so i will be reset to the first index of intervals after the change, and j will
//start at the second index of intervals (j++ from the second for loop causes this). The second if
//if statement checks if the end bound of the second interval falls within the first interval. If this
//is true, we change the left bound of the first interval to the second interval's left bound, since
//that is the smaller value and properly merges the two intervals. The third if statement checks if 
//the end bound of the first interval falls within the second interval. If it does, replace the end
//bound of the first interval with the end bound of the second interval, since the second interval has
//the larger bound. The last if statement checks if the first interval fully falls within the second
//interval. If it does, replace the first interval with the second, and remove the second from the array.