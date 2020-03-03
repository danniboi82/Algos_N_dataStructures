class Node {
    constructor(val) {
        this.value = val;
        this.next = null;
        this.prev = null;
    }
}


class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        let newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    pop() {
        let nodeToPop = this.tail;
        if (!this.head) return undefined;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = nodeToPop.prev;
            this.tail.next = null;
            nodeToPop.prev = null;
        }
        this.length--;
        return nodeToPop;

    }

    shift() {
        let nodeToShift = this.head;
        if (!this.head) return undefined;
        if (this.length === 1) {
            this.head = null;
            this.tail = nulll;
        } else {
            this.head = nodeToShift.next;
            this.head.prev = null;
            nodeToShift.next = null;
        }
        this.length--;
        return nodeToShift;
    }
}


let list = new DoublyLinkedList();
list.push("HELLO");
list.push("I'm starting");
list.push("doublyLinkedLists");

console.log(list);

list.pop();
console.log(list);

list.shift();

console.log(list);