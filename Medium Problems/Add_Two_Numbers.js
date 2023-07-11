// You are given two non-empty linked lists representing two non-negative integers. 
// The digits are stored in reverse order, and each of their nodes contains a single digit. 
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

var addTwoNumbers = function(l1, l2) {
    let head1 = l1;
    let head2 = l2;
    let arr1 = [];
    let arr2 = [];
    while(head1 !== null){
        arr1.push(head1.val);
        head1 = head1.next;
    }
    while(head2 !== null){
        arr2.push(head2.val);
        head2 = head2.next;
    }
    let num1 = 0n;
    let num2 = 0n;
    let factor = 1n;
    arr1.reverse();
    arr2.reverse();
    for(let i = arr1.length - 1; i >= 0; i--){
        if(arr1[i] != 0){
            num1 += BigInt(arr1[i]) * factor;
        }
        factor *= 10n;
        console.log(num1);
    }
    factor = 1n;
    for(let j = arr2.length - 1; j >= 0; j--){
        if(arr2[j] != 0){
            num2 += BigInt(arr2[j]) * factor;
        }
        factor *= 10n;
    }
    let sum = num1 + num2;
    let sumArr = String(sum).split("").map((sum)=>{
      return Number(sum)
    });
    sumArr.reverse();
    //console.log(sumArr);
    let newList = new LinkedList();
    while(sumArr.length){
        newList.insert(sumArr.pop());
    }
    return newList.head;
};

//We create our own linked list function to be able to return a new linked list. For this function,
//the head will always start at null, as a newly created linked list will be empty. We create an
//insert function to be able to insert new nodes into the list, with the value we wish to insert
//as the parameter of this function. We create the new node with the ListNode function given by
//LeetCode, then check if the list is empty. If it is, we assign the head of the linked list to the
//node we just created, since it is the only node of the linked list. Otherwise, we assign the new
//node's next pointer to the old head, and reassign the lists head to the node we just created. This
//is because we are inserting the new node at the beginning, or the head of the linked list. For the
//main function, we declare the heads of the given lists, and arrays to store the values of each list.
//We use while loops to traverse the linked list, pushing the value of each node into its respective
//array. Once that is done, we declare two BigInt nums to store the numeric value of the arrays, and
//a factor variable. The way this works is we start at the end of the array, or the least significant
//digit, and add the product of the value found at that index with the factor, which for the last
//digit will be 1, assuming the value at the index isn't 0 (if it is, we skip over it). We then
//multiply the factor by 10, because for the next digit to the left, it is the 10s place, so to add
//it to the num variable, we need to multiply the value there by 10, then add that to the num. We
//repeat this until we reach the first element of the array. When we are converting the second array
//into a number, we reset factor back to 1. The declarations for num1, num2, and factor have an 'n'
//at the end of them to declare that they are BigInts, and each value of arr1 and arr2 are typecasted
//into BigInts since we cannot mix regular ints with BigInts when doing mathematical expressions with
//them. Once we have the numbers of both arrays, we add them and store that value in sum, then convert
//it into an array by first changing it to a string, splitting it at each character, and mapping it so
//that each character is turned back into a number, that way we have an array of numbers, not chars.
//We reverse the array, create a new linked list, and use a while loop to traverse the new array. We
//insert the last value of the array at the head of our new list by popping it from the array and
//using the insert function in the LinkedList function, and repeat this until there are no more values
//left in our array. We return the head of the linked list once this is finished.