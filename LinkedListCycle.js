function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    let fast = head;
    let slow = head;

    if (head.next == head)
        return true;

    while (fast != null && fast.next !=null && slow != null) {
        
        fast = fast.next.next;
        slow = slow.next;

        if (fast == slow)
            return true;

    }

    return false;
    
};


let zero = new ListNode(0,negfour);
let two = new ListNode(2,zero);
let negfour = new ListNode(-4,null);
let three = new ListNode(3, two);

let x = hasCycle(three);
console.log(x);