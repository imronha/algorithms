
// 10 -> 5 => 16

// const myLinkedList = {
//     head: {
//         value: 10,
//         next: {
//             value: 5,
//             next: {
//                 value: 16,
//                 next: null
//             }
//         }
//     }
// }

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
        const leader = this.traverseToIndex(index-1);
        const tempPointer = leader.next.next;
        leader.next = tempPointer;
        this.length--
        return this.printList()
    }
}

const myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(23);
console.log(myLinkedList)