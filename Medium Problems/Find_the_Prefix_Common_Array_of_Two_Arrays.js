// You are given two 0-indexed integer permutations A and B of length n.

// A prefix common array of A and B is an array C such that C[i] is equal to the
// count of numbers that are present at or before the index i in both A and B.

// Return the prefix common array of A and B.

// A sequence of n integers is called a permutation if
// it contains all integers from 1 to n exactly once.

/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
var findThePrefixCommonArray = function(A, B) {
    let count = 1;
    let aSub = [];
    let bSub = [];
    let Carr = [];
    let prefixCount = 0;
    while(count <= A.length){
        aSub = A.slice(0, count);
        bSub = B.slice(0, count);
        for(let i = 0; i < aSub.length; i++){
            if(bSub.includes(aSub[i])){
                prefixCount++;
            }
        }
        Carr.push(prefixCount);
        prefixCount = 0;
        count++;
    }
    return Carr;
};

//We declare a count variable to keep track of up to which index of the two arrays we will be checking.
//We also declare arrays aSub and bSub, which will be sub arrays of given arrays A and B respectively.
//These sub arrays will be used to store the sub arrays of A and B up to count so we can check how
//many elements in the two sub arrays are equal to add to the C array, which is declared after these
//two. We lastly declare a prefixCount variable, to count how many times an element in aSub is found
//in bSub. We use a while loop to iterate through the A array A.length times, incrementing count after
//each iteration. At the beginning of each iteration, we slice the A and B arrays from 0 up to count,
//so we can store the sub arrays needed to calculate C[i] for the prefix common array. We then use a 
//for loop to traverse the length of aSub, though the length of bSub would work too as they would be
//equal. If bSub includes the current element of aSub, we increment prefixCount by 1. Once we exit the
//for loop, we have fully traversed bSub and found the number of all equal elements in aSub and bSub,
//so we push that value into Carr, reset prefixCount to 0, and increment count so we can check the next
//sub arrays. Once we exit the while loop, we return Carr.