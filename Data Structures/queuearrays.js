class MyQueue{
    constructor(){
        this.head = -1;
        this.tail = -1;
        this.length = 0;
        this.values = [];
    }

    enqueue(val){
        
        if(this.length === 0){
            this.values[++this.tail] = val;
            ++this.head;
            this.length++;
        }else {
            this.values[++this.tail] = val;
            this.length++;
        }
    }

    dequeue(){
        if(this.length === 0){
            return "Queue is empty";
        }else{
            this.length--;
            return this.values[this.head++];
        }
    }
    
}


const numbers = new MyQueue();

numbers.enqueue(10);
numbers.enqueue(20);
numbers.enqueue(30);
numbers.enqueue(40);
numbers.enqueue(50);

console.log(numbers.dequeue());
console.log(numbers.dequeue());
console.log(numbers.dequeue());
console.log(numbers.dequeue());