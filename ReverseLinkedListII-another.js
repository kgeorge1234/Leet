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
    if(head.next == null)
        return head;

    let pre = head;
    let curr = head;

    while(curr.val != left){
        pre = curr;
        curr = curr.next;
    }

    let tail = pre.next;
    let prev = pre;
    let adv;

    while(curr.val != right){
        adv = curr.next;
        curr.next = prev;
        prev = curr;
        curr = adv; 
    }  

    let postHead = curr.next;
    curr.next = prev;
    pre.next = curr;
    tail.next = postHead;
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