// You are given the head of a linked list, and an integer k.

// Return the head of the linked list after swapping the values of the kth node 
// from the beginning and the kth node from the end (the list is 1-indexed).

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
 * @param {number} k
 * @return {ListNode}
 */
var swapNodes = function(head, k) {
    let arr = [];
    while(head != null){
        arr.push(head.val);
        head = head.next;
    }
    let temp = arr[k-1];
    arr[k-1] = arr[arr.length-k];
    arr[arr.length-k] = temp;
    let newList = new LinkedList();
    while(arr.length){
        newList.insert(arr.pop());
    }
    return newList.head;
};

//We create an array to store the values of the linked list. While the head of the list is not null,
//meaning a value in the list still exists, we push it into array, and assign the head node to the
//next node. Once that is done, we do a simple value swap by declaring a temp variable and storing
//the kth node in it. We then move the value of the kth node from the end of the list/array to the
//kth node from the beginning, and put the temp variable into where the kth node from the end is.
//Now that the swap is complete, we declare a new linked list, and use a while loop to pop values
//from the end of the array into the head of the new list until the array is empty, then return the
//head of the new list.