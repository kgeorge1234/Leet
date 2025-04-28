function Node(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

var treeToDoublyList = function(root) {
    if (root == null)
        return null;

    let first;
    let last;

    inorder_link(root);
    first.left = last;
    last.right = first;
    return first;

    function inorder_link(node) {
        if (node == null)
            return;

        inorder_link(node.left);

        if (last != null) {
            last.right = node;
            node.left = last;
        }
        else {
            first = node;
        }
        last = node;
        inorder_link(node.right);
    }
};

