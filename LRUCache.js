/**
 * @param {number} capacity
 */

var Node = function (key,val) {
    this.key = key;
    this.val = val;
    this.prev = null;
    this.next = null;
}

var DoublyLinkedList = function () {
    this.head = new Node();
    this.tail = new Node();
    this.head.next = this.tail;
    this.tail.prev = this.head;

}

DoublyLinkedList.prototype.removeFromTail = function () {
    let tail = this.tail.prev;
    this.removeNode(tail);
    return tail.key;
}

DoublyLinkedList.prototype.removeNode = function (node) {
    node.next.prev = node.prev;
    node.prev.next = node.next;
   
}

DoublyLinkedList.prototype.insertHead = function (node) {
    node.prev = this.head;
    node.next = this.head.next;
    this.head.next.prev = node;
    this.head.next = node;
   
}

DoublyLinkedList.prototype.moveToHead = function (node) {
    this.removeNode(node);
    this.insertHead(node); 
}

var LRUCache = function(capacity) {
    this.capacity = capacity;
    this.currentSize = 0;
    this.hash = new Map();
    this.dll = new DoublyLinkedList();
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    let node = this.hash.get(key);
    if (!node)
        return -1;

    this.dll.moveToHead(node);
    return node.val;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    let node = this.hash.get(key);
    
    if (node) {
        node.val = value;
        this.dll.moveToHead(node);
    }
    else {
        let newNode = new Node(key, value);
        if (this.currentSize == this.capacity) {
            
            let tailKey = this.dll.removeFromTail();
            this.hash.delete(tailKey);
            this.currentSize -= 1;
        }
        this.dll.insertHead(newNode);
        this.currentSize += 1;
        this.hash.set(key, newNode);
    }

};

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
var obj = new LRUCache(2);
// Perform operations
obj.put(2, 1); // Cache: {1=1}
obj.put(2, 2); // Cache: {1=1, 2=2}
console.log(obj.get(2)); // Returns 1, Cache: {2=2, 1=1}
obj.put(1, 1); // Evicts key 2, Cache: {1=1, 3=3}
obj.put(4, 1); // Evicts key 1, Cache: {3=3, 4=4}
console.log(obj.get(2)); // Returns -1 (not found)
