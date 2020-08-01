// let myLinkedList = {
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
// };
class Node{
    constructor(value){
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList{
    constructor(value){
        this.head = {
            value: value,
            next: null,
            prev: null
        };
        this.tail = this.head;
        this.length = 1;
    }

    append(value){
        const newNode = new Node(value);
        newNode.prev = this.tail;
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this;
    }

    prepend(value){
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head.prev = newNode;
        this.head = newNode;
        this.length++;
        return this;
    }

    insert(index, value){
        if(index > this.length){
            return this.append(value);
        }
        const newNode = new Node(value);
        let itterativeNode = this.head;
        let currentNode = null;
        for(let i=0; i<index-1; i++){
            itterativeNode = itterativeNode.next;
        }
        currentNode = itterativeNode.next;
        itterativeNode.next = newNode;
        newNode.prev = itterativeNode;
        newNode.next = currentNode;
        currentNode.prev = newNode;
        this.length++;
        return this;
    }

    delete(index){
        if(index > this.length){
            return "Index doesnot exists in the list";
        }
        let itterativeNode = this.head;
        let deleteNode = null;
        let nextNode = null;
        for(let i=0; i<index-1; i++){
            itterativeNode = itterativeNode.next;
        }
        deleteNode = itterativeNode.next;
        nextNode = deleteNode.next;
        nextNode.prev = itterativeNode;
        itterativeNode.next = nextNode;
        this.length--;
        return this;
    }

    printList(){
        const array = [];
        let newNode = this.head;
        while(newNode !== null){
            array.push(newNode.value);
            newNode = newNode.next;
        }
        return array;
    }

    printListReverse(){
        const array = [];
        let newNode = this.tail;
        while(newNode.prev !== null){
            array.push(newNode.value);
            newNode = newNode.prev;
        }
        return array;
    }

}


const myLinkedList = new DoublyLinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);
myLinkedList.insert(2, 99);
myLinkedList.insert(10, 84);
myLinkedList.delete(2);
myLinkedList.delete(2);
console.log(myLinkedList.printList());
console.log(myLinkedList.printListReverse());