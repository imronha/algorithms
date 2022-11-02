// https://www.udemy.com/course/master-the-coding-interview-data-structures-algorithms/learn/lecture/12324574#questions/10842258

// Reversing a Singly linked list

// [1, 10, 16, 88]
// ==> [88, 16, 10, 1]


class Node {
    constructor(value){
        this.value = value,
        this.next = null
    }
}

class LinkedList {
    constructor(value) {
        const newNode = new Node(value)
        this.tail = this.head;
        this.length = 1;
    }

    append(value){
        const newNode = new Node(value)
        this.tail.next = newNode;
        this.tail = newNode;
        this.length ++;
        return this;
    }

    prepend(value) {
        const newNode = new Node(value)
        newNode.next = this.head
        this.head = newNode;
        this.length++
        return this;
    }

    // lookup(){

    // }

    printList(){
        const array = [];
        let currentNode = this.head;
        while (currentNode !== null) {
            array.push(currentNode.value)
            currentNode = currentNode.next;
        }
        return array
    }
    insert(index, value){
        // Check params

        // Check special cases
        // When new head is inserted
        // When new tail is inserted
        if(index >= this.length){
            return this.append(value);
        }
        const newNode = new Node(value);
        const leader = this.traverseToIndex(index-1);
        const tempPointer = leader.next;
        leader.next = newNode;
        newNode.next = tempPointer;
        this.length++
        return this.printList()
    }

    traverseToIndex(index){
        let counter = 0;
        let currentNode = this.head;
        while (counter !== index) {
            currentNode = currentNode.next;
            counter++;
        }
        return currentNode;
    }

    remove(index){
        // Check params
        // Check special cases
        // When new head is removed
        // When new tail is removed
        const leader = this.traverseToIndex(index-1);
        const tempPointer = leader.next.next;
        leader.next = tempPointer;
        this.length--
        return this.printList()
    }

    reverse(){
        // Check input
        // If only 1 node, return the node
        if (!this.head.next) {
            return this;
        }

        let first = this.head;
        this.tail = this.head;
        let second = first.next;
        while(second) {
        const temp = second.next;
        second.next = first;
        first second;
        second temp;
        }
        this.head.next = null;
        this.head = first;
        return this
    }
}

const myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(23);
console.log(myLinkedList)