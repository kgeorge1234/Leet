function TreeNode(val, left, right, next) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right === undefined ? null : right)
    this.next = next === undefined ? null : next;
}



var connect = function(root) {
    let curr = root;

    let nxt = null;

    if (root != null) {
        if (root.left != null)
            nxt = root.left;
        else
            nxt = root.right;
    }

    while (curr != null) {
        if(curr.left != null)
            curr.left.next = curr.right;

        if (curr.next != null) {
            if(curr.right != null)
                curr.right.next = curr.next.left != null ? curr.next.left : curr.next.right;
            else if (curr.left != null)
                curr.left.next = curr.next.left != null ? curr.next.left : curr.next.right;
        }

        curr = curr.next;

        if (nxt == null) {
            if (curr != null) {
                if (curr.left != null)
                    nxt = curr.left;
                else
                    nxt = curr.right;
            }
        }

        if (curr == null)
        {
            curr = nxt;
            if (curr != null) {
                if (curr.left != null)
                    nxt = curr.left;
                else
                    nxt = curr.right;
            }
        }
    }

    return root;
};

let seven = new TreeNode(7, null, null,null);
let five = new TreeNode(5, null, null,null);
let four = new TreeNode(4, null, null,null);
let three = new TreeNode(3, null, seven,null);
let two = new TreeNode(2, four, five,null);
let one = new TreeNode(1, two, three,null);

let x = connect(one);
console.log(x);