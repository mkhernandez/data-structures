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
const generateParenthesis = (n) => dfs(n);

const dfs = (n, combos = [], open = 0, close = 0, path = []) => {
    const isBaseCase = (path.length === (n * 2));
    if(isBaseCase) {
        combos.push(path.join(''));

        return combos;
    }

    const isOpen = open < n;
    if(isOpen) backTrackOpen(n, combos, open, close, path);

    const isClose = close < open;
    if(isClose) backTrackClose(n, combos, open, close, path);

    return combos;
}

const backTrackOpen = (n, combos, open, close, path) => {
    path.push('(');
    dfs(n, combos, open + 1, close, path);
    path.pop();
}

const backTrackClose = (n, combos, open, close, path) => {
    path.push(')');
    dfs(n, combos, open, close + 1, path);
    path.pop();
}

log(generateParentheses(n));