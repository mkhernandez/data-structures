// Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

// Example 1:

// Input: n = 3
// Output: ["((()))","(()())","(())()","()(())","()()()"]
// Example 2:

// Input: n = 1
// Output: ["()"]

// Only add open parentheses if open < n
// Only add a closing parentheses if closed < open
// Only stop adding parentheses when open === closed === n

const log = console.log;
let n = 3;

const generateParenthesis = function(n) {
    const results = [];

    generateParentheses(results, '', 0, 0, n);
    return results;
};

const generateParentheses = (results, path, open, close, n) => {
    if(path.length === (n * 2)) {
        results.push(path);
        return;
    }

    if(open < n) generateParentheses(results, path + '(', open + 1, close, n);

    if(close < open) generateParentheses(results, path + ')', open, close + 1, n);

}

// const generateParenthesis = function(n) {
//     const combos = [];
    
//     generateParentheses(combos, '', 0, 0, n);
//     return combos;
// };

// const generateParentheses = (combos, current, open, close, n) => {
//     if(current.length === (n * 2)) {
//         combos.push(current);
//         return;
//     }

//     if(open < n) generateParentheses(combos, current + '(', open + 1, close, n);

    
//     if(close < open) generateParentheses(combos, current + ')', open, close + 1, n);

// }

// var generateParenthesis = (n) => dfs(n);

// const dfs = (n, combos = [], open = 0, close = 0, path = []) => {
//     const isBaseCase = (path.length === (n * 2));
//     if (isBaseCase) {
//         combos.push(path.join(''));/* Space O(N + N) */

//         return combos; 
//     }

//     const isOpen = open < n;
//     if (isOpen) backTrackOpen(n, combos, open, close, path);  /* Time O(2^N) | Space O(2^N) */

//     const isClose = close < open;
//     if (isClose) backTrackClose(n, combos, open, close, path);/* Time O(2^N) | Space O(2^N) */

//     return combos;
// }

// const backTrackOpen = (n, combos, open, close, path) => {
//     path.push('(');/* Space O(N) */
//         dfs(n, combos, (open + 1), close, path);/* Time O(2^N) | Space O(2^N) */
//     path.pop();
// }

// const backTrackClose = (n, combos, open, close, path) => {
//     path.push(')');/* Space O(N) */
//         dfs(n, combos, open, (close + 1), path);/* Time O(2^N) | Space O(2^N) */
//     path.pop();
// }




log(generateParenthesis(n));