function ListNode(val, next) {
    this.val = val === undefined ? 0: this.val;
    this.next = next === undefined ? null : next;
}

var swapPairs = function(head) {
    let temp = new ListNode(0);
    temp.next = head;
    let current = temp

    while (current.next != null && current.next.next != null) {
        let first = current.next;
        let second = current.next.next;
        first.next = second.next;
        current.next = second;
        current.next.next = first;
        current = current.next.next;
    }

    return temp.next;
};

let four = new ListNode(4);
let three = new ListNode(3,four);
let two = new ListNode(2,three);
let one = new ListNode(1, two);
let x = swapPairs(one);
