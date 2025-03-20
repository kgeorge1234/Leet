/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}
    
var deleteDuplicates = function(head) {
    
    let curr = head;
    let prev = curr;

    while (curr != null) {
        prev = curr;
        while (curr != null && curr.next != null && curr.val === curr.next.val) {
            curr = curr.next;
        }
        prev.next = curr.next;
        curr = curr.next;
    }
    return head;
};

let seven = new ListNode(7);
let six = new ListNode(6,seven);
let five = new ListNode(3,six);
let four = new ListNode(3,five);
let three = new ListNode(2,four);
let two = new ListNode(2,three);
let one = new ListNode(1, two);

let x = deleteDuplicates(one);
console.log(x);