// Given the head of a linked list, return the list after sorting it in ascending order.

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
 * @return {ListNode}
 */
var sortList = function(head) {
    let arr = [];
    while(head != null){
        arr.push(head.val);
        head = head.next;
    }
    arr.sort(function(a,b){return a-b});
    let newList = new LinkedList();
    while(arr.length){
        newList.insert(arr.pop());
    }
    return newList.head;
};

//We declare an array to store the values of the linked list. We use a while loop to traverse the
//list, and while we have not reached the end of the list, we push the value of the head node into
//the array, then reassign the head to the next node. Once this is completed, we sort the array using
//JavaScript's sort() method, and create a new linked list, since the question asks for the return
//value to be a ListNode. We use a while loop to continuously insert the last value of the array into
//the new list until the array is empty, then return the head node of the new list.