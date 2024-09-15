class Queue {
  constructor() {
    this.item = []; //created an empty array to perform queue action
  }

  enqueue(value) {
    this.item.push(value); //pushes item at the rear of the array
  }

  dequeue() {
    if (this.item.length > 0) {
      this.item.shift();
    } else {
      throw "Stack UnderFlow";
    }
  }

  isEmpty() {
    return this.item.length === 0;
  }

  peek() {
    if (this.item.length > 0) {
      console.log("Current first item: " + this.item[0]);
    } else {
      throw "Stack UnderFlow";
    }
  }

  size() {
    console.log(this.item.length);
  }

  print() {
    console.log(this.item);
  }
}

let arr = new Queue();

arr.enqueue(1);
arr.enqueue(2);
arr.enqueue(3);
arr.enqueue(4);
arr.dequeue();
arr.print();
arr.peek();
