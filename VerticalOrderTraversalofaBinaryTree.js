function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

var verticalTraversal = function(root) {
    let result = [];
    let dict = new Map();
    let maxCol = -Infinity;
    let minCol = Infinity;

    helperfunction(root, 0, 0);

    //let finalResult = new Map([...dict.entries()].sort((a, b) => a[0] - b[0]));

    for (let i = minCol; i <= maxCol; i++){
        let dictValues = dict.get(i);
        dictValues.sort((a,b) => {
            if (a[1] == b[1])
                return a[0] - b[0];
            else
                return a[1] - b[1];
        })
        result.push(dictValues.map(item => item[0]));
    }

    return result;

    function helperfunction(node, row, col) {
        if (node == null)
            return;

        if (col > maxCol)
            maxCol = col;

        if (col < minCol)
            minCol = col;

        if (dict.has(col))
            dict.get(col).push([node.val,row]);
        else
            dict.set(col, [[node.val,row]]);

        helperfunction(node.left, row + 1, col - 1);
        helperfunction(node.right, row + 1, col + 1);
    }


};

// let seven = new TreeNode(7, null, null);
// let fifteen = new TreeNode(15, null, null);
// let twenty = new TreeNode(20, fifteen, seven);
// let nine = new TreeNode(9, null, null);
// let three = new TreeNode(3, nine, twenty);

let five = new TreeNode(5, null, null);
let seven = new TreeNode(7, null, null);
let six = new TreeNode(6, null, null);
let four = new TreeNode(4, null, null);
let three = new TreeNode(3, five, seven);
let two = new TreeNode(2, four, six);
let one = new TreeNode(1, two, three);

let x = verticalTraversal(one);
console.log(x);