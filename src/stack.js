const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {
  #stack;
  constructor(){
    this.#stack = [];
  }

  push(element) {
    if(arguments.length > 1){
      [...arguments].forEach(element => {
        this.#stack.push(element)
      });
    } else  if (arguments.length === 1){
      this.#stack.push(arguments[0])
    }
  }

  pop() {
    return this.#stack.pop()
  }

  peek() {
    let id = this.#stack.length - 1;
    return id !== -1 ? this.#stack[id] : undefined;
  }
}

module.exports = {
  Stack
};
