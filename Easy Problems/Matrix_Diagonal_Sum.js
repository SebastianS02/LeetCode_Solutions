// Given a square matrix mat, return the sum of the matrix diagonals.

// Only include the sum of all the elements on the primary diagonal and all the
// elements on the secondary diagonal that are not part of the primary diagonal.

/**
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function(mat) {
    let sum = 0;
    for(let i = 0; i < mat.length; i++){
        sum += mat[i][i];
        mat[i][i] = 0;
        //console.log(sum);
    }
    i = 0;
    for(let j = mat.length - 1; j >= 0; j--){
        sum += mat[i][j];
        //console.log(sum);
        i++;
    }
    return sum;
};

//We declare a sum variable and initialize it to 0. For the first for loop, we traverse through the
//primary diagonal, which is the diagonal that starts at the top left of the matrix and moves towards
//the bottom right of the matrix. We start at the top left cell, which is [0][0], and we use i to keep
//track of which cell we're on. In this case, we can use i for both the row and column, since we're
//staying on the primary diagonal, the row and column will always be equal. To ensure we do not add
//any value twice (specifically in the middle of the matrix), every time we add the cell's value to
//the sum, we set the value of that cell to 0. Once we exit the first for loop, we set i = 0, then
//use another for loop to traverse the secondary diagonal. This diagonal starts at the top right of
//the matrix and moves towards the bottom left, meaning we need to declare another variable j to start
//at the last column, or end, of the matrix, and move towards the beginning, while i needs to be reset
//to start at the first row again. At each iteration, we add the cell's value to sum, add i to move
//to the next row, and subtract j to move to the previous column. Once we exit this for loop, we return
//sum.