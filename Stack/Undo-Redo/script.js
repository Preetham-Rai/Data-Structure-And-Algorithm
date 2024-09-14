//Implementing stack using node based style
//created node and taking two arguements value and next(reference to next node)
class Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

class Stack {
  constructor() {
    this.top = new Node(null, null);
    this.size = 0;
  }

  push(value) {
    let newNode = new Node(value, this.top);
    this.top = newNode;
    this.size++;
  }

  peek() {
    if (this.size > 0) {
      return this.top.value;
    } else {
      throw "Stack Underflow";
    }
  }
  pop() {
    if (this.size > 0) {
      let prevTopVal = this.top.value;
      this.top = this.top.next;
      this.size--;
      return prevTopVal;
    } else {
      throw "Stack UnderFlow";
    }
  }

  isEmpty() {
    console.log(this.size === 0);
  }

  print() {
    let holder = this.top;

    while (holder.next != null) {
      console.log(holder.vlaue);
      holder = holder.next;
    }
  }
}

let undoStack = new Stack();
let redoStack = new Stack();
let counter = 0;

function incrimentCounter() {
  undoStack.push(counter);
  counter++;
  document.getElementById("val").value = counter;
}

function undo() {
  redoStack.push(counter);
  counter = undoStack.pop();
  document.getElementById("val").value = counter;
}

function redo() {
  undoStack.push(counter);
  counter = redoStack.pop();
  document.getElementById("val").value = counter;
}
