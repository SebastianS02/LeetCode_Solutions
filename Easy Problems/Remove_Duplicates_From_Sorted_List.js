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
var deleteDuplicates = function(head) {
    let arr = [];
    while(head != null){
        arr.push(head.val);
        if(arr[arr.length - 1] == arr[arr.length - 2]){
            arr.pop();
        }
        head = head.next;
    }
    let newList = new LinkedList();
    while(arr.length){
        newList.insert(arr.pop());
    }
    return newList.head;
};

//We declare an array to store the values of the linked list. While the head of the list is not null,
//meaning the list is not empty, we push the value of the head node into the array. If the value we
//pushed is equal to the last value we pushed, we pop the element we just added from the array. We
//reassign the head of the list to the next node after each iteration of the while loop. Once we exit
//the for loop, the array will created will have all of the values of the original linked list not
//including the duplicates, so we create a new linked list, and insert each value of the array into
//it, then return the head of the new list.