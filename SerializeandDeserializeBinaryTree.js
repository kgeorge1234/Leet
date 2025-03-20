function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function (root) {
  if (!root || root.length == 0) return [];

  let result = [];

  let queue = [];
  queue.push(root);

  while (queue.length > 0) {
    let count = queue.length;
    for (let i = 0; i < count; i++) {
      let node = queue.shift();

      if (node) {
        result.push(node.val);
        queue.push(node.left);
        queue.push(node.right);
      } else result.push(null);
    }
  }
  return result;
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {
  if (data.length == 0) return [];

  let queue = [];
  let root = new TreeNode(data[0]);
  queue.push(root);
  let i = 1;

  while (i < data.length) {
    let node = queue.shift();

    if (data[i] != null) {
      node.left = new TreeNode(data[i]);
      queue.push(node.left);
    }
    i++;

    if (i < data.length && data[i] != null) {
      node.right = new TreeNode(data[i]);
      queue.push(node.right);
    }
    i++;
  }
  return root;
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */

// let four = new TreeNode(4, null, null);
// let five = new TreeNode(5, null, null);
// let three = new TreeNode(3, four, five);
// let two = new TreeNode(2, null, null);
// let one = new TreeNode(1, two, three);
let x = deserialize(serialize(null));
console.log(x);
