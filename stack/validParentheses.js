// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.

//  Problem Notes
//  The first thing that sticks out is that it must start with an opening bracket ['(', '['. '{']
//  we can then have as many opening brackets in a row, followed by as many closing brackets
//  as there are opening brackets as long as they are in order. Order matters.
//  We will need an array to hold our stack of brackets.
//  As long as a bracket is an open bracket we will push it onto the stack
//  When we encounter a closing bracket we will check to see if the last bracket pushed in 
//  matches the closing bracket. If it does then pop it off the stack and continue with the next
//  bracket in the string
 
let s = "()[]{}";//returns true
let s1 = "(])";//returns false
const isValid = function(s) {
    const stack = [];
    
    for(let i = 0; i < s.length; i++) {
        if(s[i] === '(' || s[i] === '[' || s[i] === '{') {
            stack.push(s[i]);
        } else {
            if(!stack.length ||
                s[i] === ')' && stack[stack.length-1] !== '(' || 
                s[i] === ']' && stack[stack.length-1] !== '[' || 
                s[i] === '}' && stack[stack.length-1] !== '{') {
                return false;    
             }
             stack.pop();
        }
    }
    
    //two different for loop implementations tried them both in leetcode
    //and the one on top had better results
    // for(let char of s) {
    //     if(char === '(' || char === '[' || char === '{' ) {
    //         stack.push(char);
    //     } else {
    //         if(!stack.length ||
    //               char === ')' && stack[stack.length-1] !== '(' ||
    //               char === ']' && stack[stack.length-1] !== '[' ||
    //               char === '}' && stack[stack.length-1] !== '{') {
    //                   return false;
    //               }
    //         stack.pop();
    //     } 
        
    // }
    return !stack.length;
}
console.log(isValid(s));
console.log(isValid(s1));