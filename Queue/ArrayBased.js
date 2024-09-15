//Implementing Array based approach to store data as in queue
class Queue {
  constructor() {
    this.queue = [];
    this.front = 0; //the value is the index of front
    this.rear = 0; //the value is the index of the last item
  }

  enqueue(value) {
    this.queue[this.rear] = value;
    this.rear++;
  }
  //this can be a bad practice in the array to use delete instead of shift in the array to remove first ele
  dequeue() {
    if (this.queue.length > 0) {
      let val = this.queue[this.front];
      delete this.queue[this.front];
      this.front++;
      return val;
    } else {
      throw "Stack Under flow";
    }
  }
  peek() {
    console.log(this.queue[this.front]);
  }

  size() {
    console.log(this.queue.length);
  }

  isEmpty() {
    this.queue.length === 0;
  }

  print() {
    console.log(this.queue);
  }
}

let arr = new Queue();
arr.enqueue(1);
arr.enqueue(2);
arr.enqueue(3);
arr.dequeue();
arr.print();
arr.size();
