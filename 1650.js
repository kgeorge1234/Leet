/**
 * // Definition for a _Node.
 * function _Node(val) {
 *    this.val = val;
 *    this.left = null;
 *    this.right = null;
 *    this.parent = null;
 * };
 */
// cracking faang

/**
 * @param {_Node} p
 * @param {_Node} q
 * @return {_Node}
 */
var lowestCommonAncestor = function(p, q) {
    let parentSet = new Set();

    while(p != null){
        parentSet.add(p);
        p = p.parent;
    }

    while(q != null){
        if(parentSet.has(q))
            return q;
        q = q.parent;
    }
};
