// Given the head of a linked list, rotate the list to the right by k places.

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
var rotateRight = function(head, k) {
    let arr = [];
    while(head != null){
        arr.push(head.val);
        head = head.next;
    }
    k %= arr.length;
    while(k > 0){
        arr.unshift(arr[arr.length - 1]);
        arr.pop();
        k--;
    }
    let newList = new LinkedList();
    while(arr.length){
        newList.insert(arr.pop());
    }
    return newList.head;
};

//We declare an array to store the values of the linked list, and use a while loop to constantly push
//the value of the head node into the array, then reassign the head node to the next node, until the
//head node is null. Once this is done, we use the modulus operator to get the remainder of k divided
//by the length of the array we created. This is because we do not want to rotate the list more times
//than the length of it, since rotating it k times, where k is the length of the list, would simply
//result in the same array. Once we obtain the remainder, we use a while loop to add the last value of
//the array to the beginning of the array, then pop the last value of the array until k is 0,
//subtracting k by 1 every time we rotate the array. Once we exit the while loop, we create a new list,
//and constantly insert the last value of the array into the head until the array is empty, returning
//the head of the new list once this is done.