function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
}


/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let curr;
    let other;
    curr = head;

    // only one node in list
    if (head.next == null && n == 1)
        return null;

    let i = 1;
    while (i < n) {
        curr = curr.next;
        i++;
    }
    other = curr;
    curr = head;
    
    //case where node to be removed is the last node and there are only two nodes
    if (other.next == null && n == 1) {
        curr.nect == null;
        return curr;
    }
        
    //case where the node to be removed is the first node, other is already at the end, return the second node head
    if (other.next == null)
        return curr.next;

    //atleast 3 nodes
    while (other.next.next != null) {
        curr = curr.next;
        other = other.next;
    }

    curr.next = curr.next.next;
    return head;

};

let tenth = new ListNode(10);
let ninth = new ListNode(9,tenth);
let eighth = new ListNode(8,ninth);
let seven = new ListNode(7,eighth);
let six = new ListNode(6,seven);
let five = new ListNode(5,six);
let four = new ListNode(4,five);
let three = new ListNode(3,four);
let two = new ListNode(2,three);
let one = new ListNode(1,two);

console.log(removeNthFromEnd(one, 3));