class CrazyQueue {
    constructor() {
      this.first = [];
      this.last = [];
    }
  
    enqueue(value) {
      const length = this.first.length;
      console.log(length);
      for (let i = 0; i < length; i++) {
        console.log(this.last.push(this.first.pop()));
      }
      this.last.push(value)
      console.log(this.last);
      return this;
    }
  
    dequeue() {
      const length = this.last.length;
      console.log(length);
      for (let i = 0; i < length; i++) {
          console.log("loop entered");
        this.first.push(this.last.pop());
        console.log(this.first);
        console.log(this.last);
      }
      console.log(this.first.pop());
      console.log('\n');
      return this;
      
    }
    peek() {
      if (this.last.length > 0) {
        return this.last[0];
      }
      return this.first[this.first.length - 1];
    }
  }
  
  const myQueue = new CrazyQueue();
  console.log(myQueue.peek());
  myQueue.enqueue('Joy');
  console.log(myQueue.peek());
  myQueue.enqueue('Matt');
  console.log(myQueue.peek());
  myQueue.enqueue('Pavel');
  console.log(myQueue.peek());
  myQueue.dequeue();
  console.log(myQueue.peek());
  myQueue.dequeue();
  console.log(myQueue.peek());
  myQueue.dequeue();
  console.log(myQueue.peek());