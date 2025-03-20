function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

var isSameTree = function (p, q) {
    
    return helper(p, q);
    
    function helper(p, q) {
        if (p == null && q != null || p != null && q == null)
            return false;

        if (p == null && q == null)
            return true;

        if (!helper(p.left, q.left))
            return false;

        if (p.val != q.val)
            return false;

        if (!helper(p.right, q.right))
            return false;

        return true;
    }
};