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
var deleteDuplicates = function(head) {
    let arr = [];
    while(head != null){
        arr.push(head.val);
        head = head.next;
    }
    for(let i = 0; i < arr.length; i++){
        if(arr.length == 0){
            break;
        }
        //console.log(arr);
        if(arr[i] == arr[i+1]){
            if(arr[i] == arr[i+2]){
                arr.splice(i, 1);
            }
            else{
                arr.splice(i, 2);
            }
            i-=2;
        }
    }
    let newList = new LinkedList();
    while(arr.length){
        newList.insert(arr.pop());
    }
    return newList.head;
};

//We declare an array to store the values of the linked list, and we use a while loop to push the
//value of each node into the array, reassigning the head to the next node each time we do this until
//the head is null, meaning the list is empty. We then use a for loop to iterate through the array,
//and we check if the current element is equal to the next element. If it is, we then check if it is
//also equal to the next element. If it is, we only remove one of the duplicates. This is because this
//if statement checks if there are more than 2 duplicates, and only removes one. The else statement,
//on the other hand, accounts for the situation if there are only two duplicates left, and removes
//both of them. This method ensures only distinct values are left in the array. After every iteration,
//we decrement the index by 2 to ensure we do not skip over any elements, and at the beginning of each
//iteration we check to see if the array is empty, because it can loop infinitely if it is. Once we
//exit the for loop, we declare a new linked list, and continuously insert the last value of the array
//into the head of the list until the array is empty, ensuring the list will be sorted once this is
//complete. We return the head of the new list.