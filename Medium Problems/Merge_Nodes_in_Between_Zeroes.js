// You are given the head of a linked list, which contains a series of integers separated by 0's.
// The beginning and end of the linked list will have Node.val == 0.

// For every two consecutive 0's, merge all the nodes lying in between them into a single node 
// whose value is the sum of all the merged nodes. The modified list should not contain any 0's.

// Return the head of the modified linked list.

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

function LinkedList(){
    this.head = null;
    this.insert = function(val){
        let node = new ListNode(val);
        if(this.head === null){
            this.head = node;
        }
        else{
            node.next = this.head;
            this.head = node;
        }
    }
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var mergeNodes = function(head) {
    let arr = [];
    while(head != null){
        arr.push(head.val);
        head = head.next;
    }
    let sum = 0;
    let returnArr = [];
    for(let i = 0; i < arr.length; i++){
        if(arr[i] == 0 && i != arr.length - 1){
            i++;
            while(arr[i] != 0){
                sum += arr[i];
                i++;
            }
            returnArr.push(sum);
            sum = 0;
            i--;
        }
    }
    let newList = new LinkedList();
    while(returnArr.length){
        newList.insert(returnArr.pop());
    }
    return newList.head;
};

//We declare an array and use a while loop to traverse the linked list. For every iteration, we push
//the head nodes value into the array, then assign the head to the heads next node, continuously
//doing this until the head is null. We then declare a sum variable which will track the sum of the
//nodes between zeroes, and a return array to store the sums in between zeroes. We use an if statement
//to check if the current element is 0 and if i is not the last index to prevent an infinite loop. If
//a zero is found, we increment i by 1 and enter a while loop, which will run until the current
//element is 0. For every iteration, we add the current element into sum, then increment i by 1. When
//we exit the while loop, this means a 0 was found, so we push sum into returnArr, reset sum back to
//zero, then decrement i by 1, so we do not skip over the 0 we just found in the for loop's next
//iteration. Once we exit the for loop, we declare a new linked list, and use a while loop to insert
//every returnArr value into it by popping the last value of the array and inserting it into the head,
//doing this until the array is empty. Once this is done, we return the head of the new linked list.