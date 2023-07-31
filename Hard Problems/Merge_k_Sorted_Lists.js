// You are given an array of k linked-lists lists, each linked-list is sorted in ascending order.

// Merge all the linked-lists into one sorted linked-list and return it.

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
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

var mergeKLists = function(lists) {
    let arr = [];
    for(let i = 0; i < lists.length; i++){
        while(lists[i] != null){
            arr.push(lists[i].val);
            lists[i] = lists[i].next;
        }
    }
    arr.sort(function(a,b){return a-b});
    let newList = new LinkedList();
    while(arr.length){
        newList.insert(arr.pop());
    }
    return newList.head;
};

//We declare an array which will store the values of all linked lists found in lists. We use a for
//loop to traverse the lists array, and use a while loop to push each value of each list into the
//array we declared, reassigning the head each time until the current list is null, meaning we reached
//the end of it. Once that is complete, we use the sort() function to sort the array. We then create
//a new linked list, and pop the last value of the array into the head until the array is empty.