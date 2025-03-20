
 // Definition for singly-linked list.
  function ListNode(val, next) {
      this.val = (val===undefined ? 0 : val)
      this.next = (next===undefined ? null : next)
  }
 
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    
    if (head == null)
        return null;

    let n = 1;

    let curr = head;
    while (curr.next != null) {
        curr = curr.next;
        n++;
    }
    
    if (k % n == 0)
        return head;

    curr.next = head;

    if (k > n)
        k = k % n;

    let prev;

    for (let i =0; i < n - k; i++){
        prev = head;
        head = head.next;
    }

    prev.next = null;
    return head;
};


let three = new ListNode(2);
let two = new ListNode(1, three);
let one = new ListNode(0, two);
let x = rotateRight(one, 4);
console.log(x);
