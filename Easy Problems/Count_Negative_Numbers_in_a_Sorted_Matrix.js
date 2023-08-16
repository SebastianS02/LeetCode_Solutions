// Given a m x n matrix grid which is sorted in non-increasing order both 
// row-wise and column-wise, return the number of negative numbers in grid.

/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function(grid) {
    let count = 0;
    for(let i = grid.length - 1; i >= 0; i--){
        for(let j = grid[i].length - 1; j >= 0; j--){
            if(grid[i][j] < 0){
                count++;
            }
            else{
                break;
            }
        }
    }
    return count;
};

//We declare a count variable which will track how many negative numbers we find as we traverse the
//matrix. We use a double for loop to traverse the matrix, starting from the bottom and working our
//way up, since the array is sorted with the smallest values at the bottom. If the current cell we
//are checking is less than 0, we increment count by 1. Otherwise, we break the inner loop and move
//to the next row, because since the martix is sorted, if we find a positive value in any given row,
//all values after that will also e positive, so no need to check them. Once we exit the outer loop,
//we return count.