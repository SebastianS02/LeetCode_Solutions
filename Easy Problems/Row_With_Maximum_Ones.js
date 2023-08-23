// Given a m x n binary matrix mat, find the 0-indexed position of the row 
// that contains the maximum count of ones, and the number of ones in that row.

// In case there are multiple rows that have the maximum count of ones, 
// the row with the smallest row number should be selected.

// Return an array containing the index of the row, and the number of ones in it.

/**
 * @param {number[][]} mat
 * @return {number[]}
 */
var rowAndMaximumOnes = function(mat) {
    let arr = [0,0];
    let count = 0;
    let mostOnes = 0;
    for(let i = 0; i < mat.length; i++){
        for(let j = 0; j < mat[i].length; j++){
            if(mat[i][j] == 1){
                count++;
            }
        }
        if(count > mostOnes){
            arr[0] = i;
            arr[1] = count;
            mostOnes = count;
        }
        count = 0;
    }
    return arr;
};

//We declare the return array arr, and assign its 0 and 1 indices to 0, as these will contain the row
//with the most ones and the number of ones found in that row, respectively. We also declare a count
//variable to track how many ones we find in a row, and a mostOnes variable to track which row so far
//has the most ones. We use a double for loop to traverse the matrix, and for every cell, we check if
//it is equal to one, incrementing count by 1 if it is. When we exit the inner for loop, we check if
//count is greater than mostOnes, meaning we are checking if this row has more ones than any other row
//we have checked thus far. If it is, we set the first index of arr to the current row index, the
//second index of arr to count, and mostOnes to count. We then reset count to 0. Once we exit the outer
//loop, we return arr.