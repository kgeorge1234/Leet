function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

var leafSimilar = function(root1, root2) {
    let list1 = [];
    let list2 = [];

    function performDfs(node,list){
        if(node.left == null && node.right == null) {
                list.push(node.val);
                return;
        }

        performDfs(node.left,list);
        performDfs(node.right,list);
    }

    performDfs(root1,list1);
    performDfs(root2,list2);

    let i =0;
    while(i < list1.length && i < list2.length){
        if(list1[i] != list2[i])
            return false;

        i++;
    }

    if(i < list1.length || i <list2.length)
      return false;

    return true;
};

let four = new TreeNode(4, null, null);
let seven = new TreeNode(7, null, null);
let two = new TreeNode(2, seven, four);
let six = new TreeNode(6, null, null);
let five = new TreeNode(5, six, two);
let nine = new TreeNode(9, null, null);
let eight = new TreeNode(8, null, null);
let one = new TreeNode(1, nine, eight);
let three = new TreeNode(3, five, one);

let x = leafSimilar(three, null);
console.log(x);