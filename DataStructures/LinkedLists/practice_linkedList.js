//DataStructures - Linked Lists
//stores piece of data - val
//reference to next node - next
class Node {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        //IF NO HEAD then this.head = newNode && this.tail = this.head
        let newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    pop() {
        //if there is nothing to pop return undefined 
        let current = this.head;
        let newTail = current;
        if (!this.head) return undefined;

        while (current.next) {
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return this;
    }

    shift() {
        if (!this.head) return undefined;
        let current = this.head;
        this.head = current.next;
        this.length--;
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return this;
    }

    unshift(val) {
        let newNode = new Node(val);
        let current = this.head;
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = current;
            this.head = newNode;
        }
        this.length++;
        return this;
        //set newNode.next to head  FIRST 
        //THEN make this.head = newNode;
    }

    get(index) {
        let count = 0;
        let current = this.head;
        if (index < 0 || index > this.length) return undefined;
        while (count !== index) {
            current = current.next;
            count++;
        }
        return current;
        //find value at given index;
        //return value at index or index; 
    }

    set(index, val) {
        let foundNode = this.get(index);
        if (foundNode) {
            foundNode.value = val;
            return true;
        }
        return false;
    }


    insert(index, val) {
        //edge cases 
        if (index < 0 || index > this.length) return undefined;
        if (index === 0) return this.unshift(val);
        if (index === this.length) return this.push(val);
        let prevNode = this.get(index - 1);
        let newNode = prevNode.next;
        let nextNode = newNode.next;

        prevNode = newNode;
        newNode = nextNode;
        this.length++;
        return this;
    }

    remove(index) {}
}


let list = new SinglyLinkedList();
list.push("One");
list.push("Two");
list.push("Three");
list.push("Four");
console.log(list);

list.pop();
console.log(list);

list.shift();
console.log(list);

list.unshift("I'm the new #1");
console.log(list);

// console.log(list.get(1));

// list.set(0, "I'm the new no 1");
// console.log(list);
// console.log(list.remove(0));

// console.log(list);






list.insert(0, "I was inserted");
console.log(list);

console.log(list.get(1));

// console.log(list.remove(0));

// list.insert(1, "Gaesaeki");
// console.log(list);
//create new node with the value passed
// If there is no head property on list
//set the head and tail to be the newly created node
//Otherwise set the next property on the tail to be the new node and 
//set the tail property on the list to be the newly created node
//Increment the length by one        

// if there are no nodes in the list return undefined
//Loop through the list until you reach the tail
//current is the current position of the pointer
//Set the next property of the 2nd to last node to be null

//Set the tail to be the 2nd to last node

//Decrement length by 1
//Return value of the node removed

//Removes a node from beginning of linked list
//if there is nothing to shift return undefined 
//store current head in a temp variable. 
//if there is a head then head.next becomes the new head. 

//ADD a new NODE to head and make currentHead = newNode.next;

//GET the value from the given index
//Function accepts an index.
//if index is less than zero OR greater than or equal to this.length return null
//        if(!this.head) return undefined;
//Loop thru the list until you reach the index and return the node at that specific index.

// traverse () {
//     var current = this.head;
//     while(current){
//         console.log(current.val);
//         current  = current.next; 
//     }
// }



//list.get(3);
//console.log(list);