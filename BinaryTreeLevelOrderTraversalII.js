function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}
var levelOrderBottom = function(root) {
    let result = [];
    let q = [];
    
    if (root == null)
        return result;

    q.push(root);

    while (q.length > 0) {
        
        let mylist = [];
        let size = q.length;

        for (let i = 0; i < size; i++){
            let element = q.shift();
            mylist.push(element.val);
            
            if (element.left != null)
                q.push(element.left);

            if (element.right != null)
                q.push(element.right);
        }

        result.push(mylist);
    }

    return result.reverse();
};

let seven = new TreeNode(7, null, null);
let fifteen = new TreeNode(15, null, null);
let twenty = new TreeNode(20, fifteen, seven);
let nine = new TreeNode(9, null, null);
let three = new TreeNode(3, nine, twenty);

let x = levelOrderBottom(three);
console.log(x);