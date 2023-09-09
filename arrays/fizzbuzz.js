//Print out the numbers from 1...100
//If the number is divisible by 3 print the word "fizz"
//If the number is divisible by 5 pring the word "buzz"
//If the number is divisible by 3 and 5 print "fizzbuzz"
//Problem Steps
//Loop starting at one and ending at 100
//Perform modulo operation on each value %3 and %5
//Check if %3 print "fizz"
//Check if %5 print "buzz"
//If both %3 and %5 print "fizzbuzz"


const fizzBuzz = function() {
    for(let i = 1; i <= 100; i++) {
        let output = '';
        if(i % 3 === 0) {
            output += 'fizz';
        }
        if(i % 5 === 0) {
            output += 'buzz';
        }
        if(i % 7 === 0) {
            output += 'bazz';
        } 
        console.log(output || i);
        
    }
}
fizzBuzz();