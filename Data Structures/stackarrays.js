class Stack{
    constructor(){
        this.top = -1;
        this.bottom = -1;
        this.array = [];
    }

    peek(){
        return this.array[this.array.length-1];
    }

    push(value){
        this.array.push(value);
        return this;
    }

    pop(){
       this.array.pop();
       return this;
    }

}


const myStack = new Stack();
myStack.push("Google");
myStack.push("Udemy");
myStack.push("Discord");
myStack.pop();
myStack.pop();
myStack.pop();
console.log(myStack.peek());