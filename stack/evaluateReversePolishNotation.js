// You are given an array of strings tokens that represents an arithmetic expression in a Reverse Polish Notation.

// Evaluate the expression. Return an integer that represents the value of the expression.

// Note that:

// The valid operators are '+', '-', '*', and '/'.
// Each operand may be an integer or another expression.
// The division between two integers always truncates toward zero.
// There will not be any division by zero.
// The input represents a valid arithmetic expression in a reverse polish notation.
// The answer and all the intermediate calculations can be represented in a 32-bit integer.
 
let tokens = ["2","1","+","3","*"];
let tokens2 = ["4","13","5","/","+"];
const evalRPN = function(tokens) {
    const stack = [];

    for(let i = 0; i < tokens.length; i++) {
        if(tokens[i] === '+') {
            stack.push(stack.pop() + stack.pop());
        } else if(tokens[i] === '-') {
            stack.push(-stack.pop() + stack.pop());
        } else if(tokens[i] === '*') {
            stack.push(stack.pop() * stack.pop());
        } else if(tokens[i] === '/') {
            stack.push(Math.trunc(1/(stack.pop()/stack.pop())));
        } else {
            stack.push(parseInt(tokens[i]));
        }
    }
    return stack.pop();
}

console.log(evalRPN(tokens));
console.log(evalRPN(tokens2));