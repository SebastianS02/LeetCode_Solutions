// Given head which is a reference node to a singly-linked list. 
// The value of each node in the linked list is either 0 or 1. 
// The linked list holds the binary representation of a number.

// Return the decimal value of the number in the linked list.

// The most significant bit is at the head of the linked list.

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var getDecimalValue = function(head) {
    let arr = [];
    let base = 1;
    let num = 0;
    while(head !== null){
        arr.push(head.val);
        head = head.next;
    }
    for(let i = arr.length - 1; i >= 0; i--){
        if(arr[i] == 1){
            num += base;
        }
        base *= 2;
    }
    return num;
};

//We declare an empty array to store all of the values of the linked list, then a base value to
//keep track of which digit we are at in the binary number, then num to store the decimal value
//of the binary number. We use a while loop to traverse the linked list, stopping only once the
//next value is null, meaning we reached the end of the list. At each head node, we push its value
//to the array, then assign the current head to the next one, meaning in the next iteration of the
//while loop, we will be at the next node of the linked list. Once we have traversed the linked
//list, we use a for loop to traverse the array holding all of its values, starting at the end of
//the array. This is because when converting from binary to decimal, you start at the least
//significant bit, which is the rightmost digit, then move to the left. If the current digit is a
//1, we add the current base we are at to num. The base value starts at 1, and is multiplied by 2
//at each iteration of the for loop, since when converting from binary to decimal, the power of 2
//is increased by 1 every time you move one digit to the left. We return num once we exit the loop.