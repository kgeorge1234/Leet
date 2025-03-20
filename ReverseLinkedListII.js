
 // Definition for singly-linked list.
function ListNode(val, next) {
     this.val = (val===undefined ? 0 : val)
     this.next = (next===undefined ? null : next)
 }
 
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function(head, left, right) {
    if (head == null)
        return null;
    
    let prev = null;
    let current = head;

    while (left > 1) {
        prev = current;
        current = current.next;
        left--;
        right--;
    }

    let connection = prev;
    let tail = current;

    while (right > 0) {
        let next_node = current.next;
        current.next = prev;
        prev = current;
        current = next_node;
        right--;
    }

    if (connection != null) {
        connection.next = prev;
    }
    else
        head = prev;

    tail.next = current;
    return head;
};

let seven = new ListNode(7);
let six = new ListNode(6,seven);
let five = new ListNode(5,six);
let four = new ListNode(4,five);
let three = new ListNode(3,four);
let two = new ListNode(2,three);
let one = new ListNode(1, two);

let x = reverseBetween(one, 2, 4);
console.log(x);