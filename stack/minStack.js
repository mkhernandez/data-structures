// Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

// Implement the MinStack class:

// MinStack() initializes the stack object.
// void push(int val) pushes the element val onto the stack.
// void pop() removes the element on the top of the stack.
// int top() gets the top element of the stack.
// int getMin() retrieves the minimum element in the stack.
// You must implement a solution with O(1) time complexity for each function.

const minStack = function() {
    this.stack = [];
}

//push the value onto the stack
//we will use an object
minStack.prototype.push = function(val) {
    this.stack.push({
        value: val,
        min: !this.stack.length ? val : Math.min(val, this.getMin())
    });
}

//pop the value off the stack
minStack.prototype.pop = function(val) {
    this.stack.pop();
}

//top will return the top value on the stack
//return value
minStack.prototype.top = function() {
    return this.stack[this.stack.length-1].value;
}

//get minimum element in the stack
minStack.prototype.getMin = function() {
    return this.stack[this.stack.length-1].min;
}
const min = new minStack();
min.push();
 