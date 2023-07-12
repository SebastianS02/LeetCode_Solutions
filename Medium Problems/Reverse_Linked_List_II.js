// Given the head of a singly linked list and two integers left and right where left <= right, 
// reverse the nodes of the list from position left to position right, and return the reversed list.

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
        }else{
            node.next = this.head;
            this.head = node;
        }
    }
}

//We create our own linked list function to be able to return a new linked list. For this function,
//the head will always start at null, as a newly created linked list will be empty. We create an
//insert function to be able to insert new nodes into the list, with the value we wish to insert
//as the parameter of this function. We create the new node with the ListNode function given by
//LeetCode, then check if the list is empty. If it is, we assign the head of the linked list to the
//node we just created, since it is the only node of the linked list. Otherwise, we assign the new
//node's next pointer to the old head, and reassign the lists head to the node we just created. This
//is because we are inserting the new node at the beginning, or the head of the linked list.

/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function(head, left, right) {
    let arr = [];
    while(head != null){
        arr.push(head.val);
        head = head.next;
    }
    let subArr = arr.slice(left-1, right).reverse();
    for(let i = left - 1; i < right; i++){
        arr[i] = subArr[0];
        subArr.splice(0, 1);
    }
    let newList = new LinkedList();
    while(arr.length){
        newList.insert(arr.pop());
    }
    return newList.head;
};

//We declare an array to store the values of the linked list nodes and use a while loop to traverse
//the list. While head is not null, meaning we haven't reached the final node yet, we push the value
//of the current node into the array, and assign the head of the linked list to the next node. We
//then declare a new array which will be a sub array of the original, only containing the indexes
//between the given left and right values of the current array, and reverse it. Using a for loop, we
//put this reversed array back into the original by starting at the left index of the original array,
//since slice() does not change the original array, and replacing each value with its reversed
//counterpart. We also remove the first element of the subarray after each iteration, since that is
//the value we are inserting back into the original each time. Once this is done, we create a new
//linked list, and insert each value of the modified array into this list, with each value having its
//own node.