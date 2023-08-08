// You are given the head of a linked list with n nodes.

// For each node in the list, find the value of the next greater node.
// That is, for each node, find the value of the first node
// that is next to it and has a strictly larger value than it.

// Return an integer array answer where answer[i] is the value of the next greater node of the
// ith node (1-indexed). If the ith node does not have a next greater node, set answer[i] = 0.

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */
var nextLargerNodes = function(head) {
    let arr = [];
    while(head != null){
        arr.push(head.val);
        head = head.next;
    }
    let answer = [];
    let nextLargest = 0;
    for(let i = 0; i < arr.length - 1; i++){
        for(let j = i + 1; j < arr.length; j++){
            if(arr[j] > arr[i]){
                nextLargest = arr[j];
                break;
            }
        }
        answer.push(nextLargest);
        nextLargest = 0;
    }
    answer.push(0);
    return answer;
};

//We declare an array to store the values of the linked list, and use a while loop to continuously
//push the head nodes value into the array and reassign the head node to the next node until the head
//is null. We then declare the answer array and a variable nextLargest to store the value of the next
//largest node of a given node. We use a double for loop to traverse the array. For every element, we
//check every element after it to see if that element is greater than the current element. If it is,
//we store the value of that element in nextLargest and break the inner loop. Once we exit the inner
//loop we push the value in nextLargest into answer, then reset nextLargest to 0. It is worth noting
//that if a nextLargest value is never found, a 0 will be pushed. Once we exit the outer loop, we push
//a 0 to the end of answer, since the outer loop does not include the last element as it will always 
//result in a 0 being pushed, then return answer.