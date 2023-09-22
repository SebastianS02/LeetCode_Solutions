// Given the head of a linked list, reverse the nodes of
// the list k at a time, and return the modified list.

// k is a positive integer and is less than or equal to the length of the linked list. 
// If the number of nodes is not a multiple of k then 
// left-out nodes, in the end, should remain as it is.

// You may not alter the values in the list's nodes, only nodes themselves may be changed.

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
var reverseKGroup = function(head, k) {
    let arr = [];
    while(head != null){
        arr.push(head.val);
        head = head.next;
    }
    let subArr = [];
    let index = 0;
    for(let i = 0; i < arr.length; i+=k){
        if(i + k > arr.length){
            break;
        }
        subArr = arr.slice(i, i+k).reverse();
        for(let j = i; j < subArr.length + i; j++){
            arr[j] = subArr[index];
            index++;
        }
        index = 0;
    }
    let newList = new LinkedList();
    while(arr.length){
        newList.insert(arr.pop());
    }
    return newList.head;
};

//We declare an empty array and use a while loop to push the value of the head node into the array,
//then assign it to the head of the next node until the list is empty. Then, we declare an empty
//sub array, and an index variable. We use a for loop to traverse the new array, incrementing i by k
//for every iteration. We check to see if adding k one more time would exceed the length of the array,
//meaning it would not swap k values. If this is true, we break the for loop. Otherwise, we set the
//sub array to the original array sliced from i to i + k, then reverse it. We use another for loop to
//swap the values of the original array and sub array, then create a new list and insert all of the
//values from the array into the list, returning the head of it once that is completed.