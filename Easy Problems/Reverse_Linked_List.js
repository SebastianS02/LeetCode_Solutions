//Given the head of a singly linked list, reverse the list, and return the reversed list.

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
var reverseList = function(head) {
    let arr = [];
    while(head != null){
        arr.push(head.val);
        head = head.next;
    }
    arr.reverse();
    let newList = new LinkedList();
    while(arr.length){
        newList.insert(arr.pop());
    }
    return newList.head;
};

//We declare an array to store the values of the linked list. We use a while loop to traverse the
//linked list, and for each node, we push its value into the array, then change the head of the
//linked list to the next node. Once we exit the while loop, we use JavaScript's reverse function
//to reverse the array. Then we create a new linked list to store the values of this array, and use
//a while loop to traverse the array. For each element, we insert a node with the last value of the
//array at the head of the list until the array is empty. Once this finishes, we return the head of
//the new linked list.