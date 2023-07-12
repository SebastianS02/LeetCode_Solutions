// Given the head of a singly linked list, return the middle node of the linked list.

// If there are two middle nodes, return the second middle node.

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
 * @return {ListNode}
 */
var middleNode = function(head) {
    let arr = [];
    while(head != null){
        arr.push(head.val);
        head = head.next;
    }
    arr.splice(0, arr.length/2);
    let newList = new LinkedList();
    while(arr.length){
        newList.insert(arr.pop());
    }
    return newList.head;
};

//We create an array to store all of the values of the linked list, and use a while loop to traverse
//the linked list. At each node, we push its value into the array, then assign the head to the head
//of the next node, and we repeat this until head is null, meaning we reached the end of the linked
//list. Once we exit the while loop, we splice the array by removing the entire first half of the
//array. We do this by starting at 0, and removing the length of the array / 2 elements, which will
//always remove exactly half of the elements. We declare a new linked list to store the elements of
//the new array, then use a while loop to insert a new node for each element of the array by popping
//the values from the array. We continue this until there are no elements left in the array, then
//return the head of the new linked list.