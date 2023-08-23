// Given an array arr of integers, check if there exist two indices i and j such that :

// i != j
// 0 <= i, j < arr.length
// arr[i] == 2 * arr[j]

/**
 * @param {number[]} arr
 * @return {boolean}
 */
var checkIfExist = function(arr) {
    for(let i = 0; i < arr.length; i++){
        if(arr.includes(arr[i] * 2) && arr.indexOf(arr[i] * 2) != i){
            return true;
        }
    }
    return false;
};

//We use a for loop to traverse arr. We use includes() to check if arr includes the current element
//doubled, and we use indexOf() to check if the index of this element is not the index of the current
//element. If both are true, we return true. If we exit the for loop, both conditions were never
//satisfied, meaning N and its double do not exist, so we return false.