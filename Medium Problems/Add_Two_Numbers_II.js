// You are given two non-empty linked lists representing two non-negative integers. 
// The most significant digit comes first and each of their nodes contains a single digit. 
// Add the two numbers and return the sum as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
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

var addTwoNumbers = function(l1, l2) {
    let h1 = l1;
    let h2 = l2;
    let arr1 = [];
    let arr2 = [];
    while(h1 != null){
        arr1.push(h1.val);
        h1 = h1.next
    }
    while(h2 != null){
        arr2.push(h2.val);
        h2 = h2.next
    }
    let num1 = 0n;
    let num2 = 0n;
    let factor = 1n;
    for(let i = arr1.length - 1; i >= 0; i--){
        num1 += BigInt(arr1[i]) * factor;
        factor *= 10n;
    }
    factor = 1n;
    for(let j = arr2.length - 1; j >= 0; j--){
        num2 += BigInt(arr2[j]) * factor;
        factor *= 10n;
    }
    let sum = num1 + num2;
    let arr3 = sum.toString().split('');
    let newList = new LinkedList();
    while(arr3.length){
        newList.insert(arr3.pop());
    }
    return newList.head;
};

//We declare the two heads of the linked lists, and two arrays to store the values held by each list.
//We use while loops to traverse each list, pushing the value of the current node into its respective
//array, then assigning the head to the next node, continuing this until the next node is null. Once
//this is done, we declare two numbers BigInt numbers and a BigInt factor variable to put the numeric
//value of these arrays into a single variable. We use a for loop to traverse both arrays, starting at
//the end of the array. At each element, we add the value of the current element multiplied by the
//current factor we are on, which increases by 10 each time we move left in the array. We reset factor
//to 1 before converting the second array into a number to make sure the value is accurate. We declare
//a sum variable, which is the sum of the two numbers we just obtained from the lists/arrays. We
//convert this number back into an array by first converting it to a string with the toString method,
//then splitting it at each character into an array. We declare a new linked list which will contain
//this number. We use a while loop to move each digit of this number into the linked list, inserting a
//new node for each element in the array by popping the last value from the array. We continue this
//until the array is empty, returning the head of the final list once that is finished.