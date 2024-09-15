//Creating a node based approach over queue data structure
class Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

class Queue {
  constructor() {
    this.front = new Node(null, null);
    this.rear = new Node(null, null);
    this.size = 0;
  }

  enqueue(value) {
    let newNode = new Node(value, null);

    if (this.front === 0) {
      this.front = this.rear = newNode;
    } else {
      this.rear.next = newNode;
      this.rear = newNode;
    }
    this.size++;
  }

  dequeue() {
    if (this.size === 0) {
      throw "Stack UnderFlow";
    } else {
      let val = this.front.value;
      this.front = this.front.next;
      this.size--;
      return val;
    }
  }

  peek() {
    if (this.size === 0) {
      throw "Stack UnderFlow";
    } else {
      console.log(this.front.value);
    }
  }

  isEmpty() {
    console.log(this.size === 0);
  }
  print() {
    let holder = this.front;
    while (holder.next !== null) {
      console.log(holder.value);
      holder = holder.next;
    }
  }
}
