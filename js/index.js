// Given an integer n, return a counter function. This counter function initially returns n and 
// then returns 1 more than the previous value every subsequent time it is called (n, n + 1, n + 2, etc).

let n = 0;
const log = console.log;
const createCounter = function(n) {
    let count, initial = n;
    return function() {
        if(n === undefined || initial === n) { // First iteration to set count to n
            count = n;
            initial = -1;
        } else {
            count = count + 1; // All subsequent calls will default to here and run this code
        }
        return count;
    };
};

const counter = createCounter(n);
log(counter());
log(counter());
log(counter());
log(counter());
log(counter());
