
 
 function Node(val, next) {
     this.val = val;
      this.next = next;
  };


/**
 * @param {_Node} head
 * @param {number} insertVal
 * @return {_Node}
 */

//cracking faang
var insert = function(head, insertVal) {
    if(head == null){
        let newNode = new Node(insertVal);
        newNode.next = newNode;
        return newNode;
    }

    let curr = head;

    while (curr.next != head) {
        if (curr.val <= insertVal && insertVal <= curr.next.val) {
            let newNode = new Node(insertVal);
            newNode.next = curr.next;
            curr.next = newNode;
            return head;
        }
        else if (curr.val > curr.next.val) {
            if (curr.val <= insertVal || insertVal <= curr.next.val) {
                let newNode = new Node(insertVal);
                newNode.next = curr.next;
                curr.next = newNode;
                return head;
            }
        }
        curr = curr.next;       
    }

    let newNode = new Node(insertVal);
    newNode.next = curr.next;
    curr.next = newNode;
    return head;

};