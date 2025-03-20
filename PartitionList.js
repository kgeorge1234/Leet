/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}


var partition = function(head, x) {
    let beforeHead = new ListNode(-1);
    let before = beforeHead;
    let afterHead = new ListNode(-1);
    let after = afterHead;

    let curr = head;

    while (curr != null) {
        if (curr.val < x) {
            before.next = curr;
            before = before.next;
        }
        else {
            after.next = curr;
            after = after.next;
        }
        curr = curr.next;
    }
    after.next = null;
    before.next = afterHead.next;
    return beforeHead.next;

};

let six = new ListNode(2);
let five = new ListNode(5,six);
let four = new ListNode(2,five);
let three = new ListNode(3,four);
let two = new ListNode(4,three);
let one = new ListNode(1, two);

let x = partition(one, 3);
console.log(x);