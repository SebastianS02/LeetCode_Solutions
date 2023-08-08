// Given the head of a linked list and an integer val, remove all the nodes
// of the linked list that has Node.val == val, and return the new head.

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
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    let arr = [];
    while(head != null){
        if(head.val != val){
            arr.push(head.val);
        }
        head = head.next;
    }
    let newList = new LinkedList();
    while(arr.length){
        newList.insert(arr.pop());
    }
    return newList.head;
};

//We declare an array to store the values of the linked list. We use a while loop to traverse the
//linked list, iterating continuously until the head is null, meaning there are no more nodes left.
//We check to see if the head nodes value is equal to val. If it is not, we push that value into the
//array. Otherwise, we do nothing and simply reassign the head to the next node. Once we exit the
//while loop, we declare a new linked list that we will be returning. We use another while loop to
//iterate through the array, constantly popping the last value of the array into the head of the new
//list until the array is empty. Once this is finished, we return the head of the new list.