function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
}



var addTwoNumbers = function(l1, l2) {
    let current1 = l1;
    let current2 = l2;
    let head = new ListNode(-1);
    let runner = head;
    let carry = 0;
    let ans = 0;

    while (current1 != null && current2 != null) {
        ans = current1.val + current2.val + carry;
        carry = ans >= 10 ? 1 : 0;
        ans = ans % 10;
        runner.next = new ListNode(ans);
        runner = runner.next;

        current1 = current1.next;
        current2 = current2.next;
    }

    // either current1 or current2 is null or both null

    while (current1 == null && current2 != null) {
        if (carry == 1) {
            ans = current2.val + carry;
            carry = ans >= 10 ? 1 : 0;
            ans = ans % 10;
            
            runner.next = new ListNode(ans);
        }
        else {
            runner.next = new ListNode(current2.val);
        }
        
        runner = runner.next;
        current2 = current2.next;
            
    }

    while (current1 != null && current2 == null) {
        if (carry == 1) {
            ans = current1.val + carry;
            carry = ans >= 10 ? 1 : 0;
            ans = ans % 10;
            
            runner.next = new ListNode(ans);
        }
        else {
            runner.next = new ListNode(current1.val);
        }
        
        runner = runner.next;
        current1 = current1.next;
            
    }

    if (carry == 1)
        runner.next = new ListNode(carry);

    return head.next;
          
};

let node3 = new ListNode(3);
let node2 = new ListNode(4, node3);
let node1 = new ListNode(2, node2);

let node4 = new ListNode(4);
let node5 = new ListNode(6, node4);
let node6 = new ListNode(5, node5);

let result = addTwoNumbers(node1, node6);
console.log(result.val);
console.log(result.next.val);
console.log(result.next.next.val);
