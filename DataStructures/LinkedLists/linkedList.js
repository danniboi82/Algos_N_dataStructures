//DataStructures - Linked Lists
//stores piece of data - val
//reference to next node - next
class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}


// Naive way to keep adding nodes to current linked list
var first = new Node("Hi");
first.next = new Node("There");
first.next.next = new Node("How");
first.next.next.next = new Node("are");
first.next.next.next = new Node("you?");


class SinglyLinkedList {
    constructor() {
        this.length = 0;
        this.head = null;
        this.tail = null;
    }

    push(val) {
        //create new node with the value passed
        var newNode = new Node(val);
        // If there is no head property on list
        if (!this.head) {
            //set the head and tail to be the newly created node
            this.head = newNode;
            this.tail = this.head;
        } else {
            //Otherwise set the next property on the tail to be the new node and 
            this.tail.next = newNode;
            //set the tail property on the list to be the newly created node
            this.tail = newNode;
        }
        //Increment the length by one        
        this.length++;
        return this;
    }

    pop() {
        // if there are no nodes in the list return undefined
        if (!this.head) return undefined;
        //Loop through the list until you reach the tail
        //current is the current position of the pointer
        let current = this.head;
        let newTail = current;
        while (current.next) {
            newTail = current;
            current = current.next;
        }
        console.log("?" + current.val, newTail.val);

        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return current;
        //Set the next property of the 2nd to last node to be null

        //Set the tail to be the 2nd to last node

        //Decrement length by 1
        //Return value of the node removed
    }

    //Removes a node from beginning of linked list
    shift() {
        let currentHead;
        //if there is nothing to shift return undefined 
        if (!this.head) return undefined;
        //store current head in a temp variable. 
        currentHead = this.head;
        //if there is a head then head.next becomes the new head. 
        this.head = currentHead.next;
        this.length--;
        if (this.length === 0) {
            this.tail = null;
        }
        return currentHead;
    }
    //ADD a new NODE to head and make currentHead = newNode.next;
    unshift(val) {
        let newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    //GET the value from the given index
    //Function accepts an index.
    get(index) {
        //if index is less than zero OR greater than or equal to this.length return null
        //        if(!this.head) return undefined;
        if (index < 0 || index >= this.length) return null;
        //Loop thru the list until you reach the index and return the node at that specific index.
        let counter = 0;
        let current = this.head;
        while (counter !== index) {
            current = current.next;
            counter++;
        }
        return current;
    }


    //SET replaces the value at the given node
    set(index, val) {
        if (index < 0) return undefined;
        let foundNode = this.get(index);
        if (foundNode) {
            foundNode.value = val;
            return true;
        }
        return false;
    }

    //Insert adds a new node at specified node (DOESNT REPLACE)
    insert(index, val) {
        let newNode = new Node(val);
        if (index < 0 || index > this.length) return false;
        if (index === this.length) this.push(newNode);
        if (index === 0) this.unshift(newNode);

        let prev = this.get(index - 1);
        let temp = prev.next;
        prev.next = newNode;
        newNode.next = temp;
        this.length++;
        return true;
    }

    // traverse () {
    //     var current = this.head;
    //     while(current){
    //         console.log(current.val);
    //         current  = current.next; 
    //     }
    // }
}

var list = new SinglyLinkedList();
list.push("HELLO");
//console.log("first push" + list);
list.push("goodbye");
//console.log("second push" + list);
list.push("Yay I can push a value into a linked LIST!!")
//console.log("third push" + list);
//list.traverse();
//list.pop();
//list.shift();
//console.log(list);

//list.unshift("I am number 1");
//console.log(list);

list.get(3);
//console.log(list);

list.set(1, "WWTF?");
console.log(list);