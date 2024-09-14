//Implement stack Data Structure using an Array based approach
//creating a class based approach
class Stack {
  constructor() {
    //Created an empty array
    this.stack = [];
  }
  isEmpty() {
    //to check the value is Empty or Not
    return this.stack.length === 0;
  }

  size() {
    console.log(this.stack.length);
  }

  push(value) {
    //it is to push the value to the stack
    this.stack.push(value);
  }

  pop() {
    //remove the value from the stack
    if (this.stack.length > 0) {
      return this.stack.pop();
    } else {
      throw "Stack UnderFlow";
    }
  }

  peek() {
    if (this.stack.length > 0) {
      return this.stack[this.stack.length - 1]; // length -1 prints out the right most element's index
    } else {
      throw "Stack UnderFlow";
    }
  }

  print() {
    //it prints out the array of stack data
    console.log(this.stack);
  }
}

let arrayStack = new Stack(3);
arrayStack.push(1);
arrayStack.push(1);
arrayStack.push(1);
arrayStack.print();
console.log(arrayStack.isEmpty());
