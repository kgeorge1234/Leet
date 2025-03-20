
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var sortList = function(head) {
    
    if (head == null || head.next == null)
        return head;

    let temp;
    let slow = head;
    let fast = head;

    while (fast != null && fast.next != null) {
        temp = slow;
        slow = slow.next;
        fast = fast.next.next;    
    }
    temp.next = null;

    let left = sortList(head);
    let right = sortList(slow)
    
    return merge(left, right);


    function merge(l1, l2) {
        let sorted_temp = new ListNode(0);
        let current = sorted_temp;

        while (l1 != null && l2 != null) {
            if (l1.val < l2.val)
            {
                current.next = l1;
                l1 = l1.next;
            }
            else
            {
                current.next = l2;
                l2 = l2.next;

            }
            current = current.next;
        }

        if (l1 != null) {
            current.next = l1;
            l1 = l1.next;
        }

        if (l2 != null) {
            current.next = l2;
            l2 = l2.next;
        }

        return sorted_temp.next;

    }
};



let three = new ListNode(3);
let one = new ListNode(1,three);
let two = new ListNode(2,one);
let four = new ListNode(4, two);

let x = sortList(four);
console.log(x);