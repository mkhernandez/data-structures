// Write a function createCounter. It should accept an initial integer init. It should return an object with three functions.

// The three functions are:

// increment() increases the current value by 1 and then returns it.
// decrement() reduces the current value by 1 and then returns it.
// reset() sets the current value to init and then returns it.

let number = 0;
const log = console.log;

// Solving problem with a class
class Counter {
    constructor(init) {
        this.init = init;
        this.count = init;
    }
    increment() {
        this.count += 1;
        return this.count;
    }
    decrement() {
        this.count -= 1;
        return this.count;
    }
    reset() {
        this.count = this.init;
        return this.count;
    }
}

const createCounter = function(init) {
    // Using a class
    return new Counter(init);

    // Using a more traditional way returning an object with functions
    // let initial = 0, value = 0;
    // return {
    //     increment: () => {
    //         if(initial === 0) {
    //             value = init;
    //             initial = -1;
    //         }
    //         return value += 1;
    //     },
    //     decrement: () => {
    //         if(initial === 0) {
    //             value = init;
    //             initial = -1;
    //         }
    //         return value -= 1;
    //     }, 
    //     reset: () => {
    //         if(initial === 0) {
    //             value = init;
    //             initial = -1;
    //         }
    //         return value = init;
    //     }
    // }
};

const counter = createCounter(number);
log(counter.increment());
log(counter.increment());
log(counter.decrement());
log(counter.reset());
log(counter.reset());
