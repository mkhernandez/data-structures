// Write a function expect that helps developers test their code. It should take in any value val 
// and return an object with the following two functions.

// toBe(val) accepts another value and returns true if the two values === each other. If they are 
// not equal, it should throw an error "Not Equal".
// notToBe(val) accepts another value and returns true if the two values !== each other. If they 
// are equal, it should throw an error "Equal".

const log = console.log;
const expect = function(val) {
    return {
        toBe: (val2) => {
            if(val !== val2) throw new Error('Not Equal'); 
            return true;
        },
        notToBe: (val2) => {
            if(val === val2) throw new Error('Equal'); 
            return true;
        }
    }
};

log(expect(5).toBe(5));
log(expect(6).toBe(6));
log(expect(7).toBe(7));