//Binary sort on an array. Try to do it in one pass
//1. Check first value and second value in the array. If arr[n] < arr[n+1] then zero in place otherwise switch them. If equal do nothing
// const arr = [0, 0, 1, 1, 1, 1, 1, 0, 0, 0];
// let value = -1;//this is the placeholder for the next index position to set with the new value
// let temp = 0;//Holds the temporary value 

// for(let i = 0; i < arr.length; i++) {
//     if(arr[i] < 1) {
//         value++;
//         temp = arr[i];
//         arr[i] = arr[value];
//         arr[value] = temp;
//     }
// }

// alert('Output of the array is: ' + arr);

//Inverse Permutation on an array. For each element position find the corresponding value in the array and set that value to the
//actual index position of what ever the element specifies.
//1. setup a value that represents the index of elements value
//2. loop through the array checking the array value and then swapping the element that represents the current position
// const arr = [1, 2, 4, 5, 3]; 
//Output should be 5 1 2 3 4
// const arr1 = [];//This array will be mapped to 
// for(let i = 0; i < arr.length; i++) {
//     arr1[arr[i] - 1] = i + 1;
// }

// console.log('Output of permutation is: ' + arr1);

// const buf4 = Buffer.from([1, 4, 3]);
// console.log(buf4);

//Write a function called same that takes two arrays
//The function should return true if every value in the array
//has its corresponding value squared in the second array
//The frequency of values must be the same
//output [1, 3, 4] => [16, 1, 9] true
//[1, 2, 2] => [4, 1, 4] also true
//[1, 2, 3] => [4, 9] false
//[2, 2, 3] => [4, 9, 1] false
//Here is a naive approach. This is not the best way to implement the task
// function same(arr1, arr2) {
//     if(arr1.length !== arr2.length) {
//         return false;
//     }
//     for(let i = 0; i < arr1.length; i++) {
//         let correctIndex = arr2.indexOf(arr1[i] ** 2);
//         if(correctIndex === -1) {
//             return false;
//         }
//         arr2.splice(correctIndex, 1);
//     }
//     return true;
// }

//Here is another solution using objects for frequency counting
// function same1(arr1, arr2) {
//     if(arr1.length !== arr2.length){
//         return false;
//     }
//     let frequencyCounter1 = {};
//     let frequencyCounter2 = {};
//     for(let val of arr1) {
//         frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
//     }
//     for(let val of arr2) {
//         frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
//     }
//     console.log(frequencyCounter1);
//     console.log(frequencyCounter2);
//     for(let key in frequencyCounter1) {
//         if(!(key ** 2 in frequencyCounter2)) {
//             return false;
//         }
//         if(frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
//             return false;
//         }
//     }
//     return true;
// }

// const result = same1([1, 2, 3, 2, 5], [9, 4, 1, 4, 25]);
// console.log(result);
// let journal = [];

// function addEntry(events, squirrel) {
//   journal.push({events, squirrel});
//   console.log(events, squirrel);
// }
// addEntry(["work", "touched tree", "pizza", "running",
//           "television"], false);
// addEntry(["work", "ice cream", "cauliflower", "lasagna",
//           "touched tree", "brushed teeth"], false);
// addEntry(["weekend", "cycling", "break", "peanuts",
//           "beer"], true);
// console.log('Here is my journal: ', journal);    
// for(let entry of journal) {
//     console.log(entry.events[0]);
// }

//Anagram challenge - Given two strings write a function
//To determine if the second string is an anagram of 
//The first one. O(n) time
//Examples => 'ana', 'naa' //true
//'asa', 'ssa' //false (frequency matters)
// function validAnagram(str1, str2) {
//     if(str1.length !== str2.length) {
//         return false;
//     }
//     let freq1 = {};
//     let freq2 = {};
//     for(val of str1) {
//         freq1[val] = (freq1[val] || 0) + 1;
//     }
//     for(val of str2) {
//         freq2[val] = (freq2[val] || 0) + 1;
//     }
//     console.log(freq1);
//     console.log(freq2);
//     //for loop to check if the values exists in both strings
//     //and to check frequency if it does exist
//     for(key in freq1) {
//         if(!(key in freq2)) {
//             return false;
//         }
//         if(freq2[key] !== freq1[key]) {
//             return false;
//         }
//     }
//     return true;
// }
//Can also write the function another way using 1 object
//And 1 less for loop. We still have O(n) time 
// function validAnagram(str1, str2) {
//     if(str1.length !== str2.length) {
//         return false;
//     }
//     const frequent = {};
//     //Check if the letter exist. If so, then add 1, if not set to 1
//     for(let i = 0; i < str1.length ; i++) {
//         let char = str1[i];
//         frequent[char] ? frequent[char] += 1 : frequent[char] = 1;
//     }
//     //Checks for frequency or number of occurences of letter
//     for(let i = 0; i < str2.length; i++) {
//         let char = str2[i];
//         if(!frequent[char]) {//If letter doesn't exist or less than zero
//             return false;
//         }else {
//             frequent[char] -= 1;
//         }
//     }
//     return true;
// }

// console.log(validAnagram('passport', 'portpass'));

//Write a function called sumZero that will find two numbers
//In a sorted array that add up to zero. We will use the 
//The two pointer technique
// function sumZero(arr) {
//     let left = 0;
//     let right = arr.length-1;
//     while(left < right) {
//         let sum = arr[left] + arr[right];
//         if(sum === 0) {
//             return [arr[left], arr[right]];
//         } else if(sum > 0) {
//             right--;
//         } else {
//             left++;
//         } 
         
//     } 
    
// }
// console.log(sumZero([-4, -3, -2, -1, 0, 5, 10]));

//Write a function called countUniqueValues using two pointer technique
//that will count the number of unique values and return that number. 
//It will take an array as a parameter
//[1, 1, 1, 1, 2] => 2 unique values
//[1, 2, 4, 4, 4, 5, 7, 7] => 5 unique values
//[1, 1, 1, 1, 1] => 1 unique value
// function countUniqueValues(arr) {
//     let current = 0;
//     let next = 1;
//     let uniqueValues = 0;
//     while(next < arr.length) {
//         //Check if first two are the same and add 1
//         if((current === 0 && arr[current] === arr[next])) {
//             uniqueValues += 1;
//         } //Check if the first two are not the same then add 2
//         else if((current === 0 && arr[current] !== arr[next])) {
//             uniqueValues += 2;
//         }
//         if(arr[current] !== arr[next]) {//Check the rest of array
//             uniqueValues += 1;
//         }
//         current = next;
//         next++;
//     }
//     return uniqueValues;
// }

// console.log(countUniqueValues([1, 1, 2, 3, 4, 4, 4, 5]));

//This is another way of finding the number of unique values.
//You can use the array to store the unique values then return 
//The length of the array 
function uniqueValues(arr) {
    let current = 0;
    let next = 1;
    while(next < arr.length) {//Traverse the array 
        //If the values are the same keep traversing the array
        if((arr[current] !== arr[next])){
            current += 1;
            arr.splice(current, 1, arr[next]);
            next += 1;
        }
        if(arr[current] === arr[next]) {
            next += 1;
        }
        
    }
    return current + 1;
}
console.log(uniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]));

//Check the frequency of digits between two positive integers
//(182, 281) true
//(489, 488) false
function sameFrequency(num1, num2) {
    let str1 = num1.toString();
    let str2 = num2.toString();
    if(str1.length !== str2.length) return false;
    const frequencyCounter = {};
    for(let value of str1) {
        frequencyCounter[value] ? frequencyCounter[value] += 1 : frequencyCounter[value] = 1; 
    }
    //Loop through second string and set to char and check if it exists in 
    //frequencyCounter or less than zero(returns false). If it exists then
    //decrement the count of the digit by one
    for(let i = 0; i < str2.length; i++) {
        let char = str2[i];
        if(!(frequencyCounter[char])) {//If the character(number) doesn't exist or is less than zero
            return false;
        } else {//Character(number) found decrement the count
            frequencyCounter[char] -= 1;
        }
    }
    return true;
}

// console.log(sameFrequency(18520, 12588));

//Write a function called areThereDuplicates that checks if there are duplicates of
//the arguments passed in. You can use the frequency counter or multiple pointer method
function areThereDuplicates(...args) {
//   args.sort();
//   let current = 0;
//   let next = 1;
//   while(next < args.length) {
//       if(args[current] === args[next]){
//           return true;
//       }
//       current++;
//       next++;
//   }
//   return false;

//   let collection = {};
//   for(let val in arguments) {
//       collection[arguments[val]] ? collection[arguments[val]] +=1 : collection[arguments[val]] = 1;
//   }
//   for(let key in collection) {
//       if(collection[key] > 1) return true;
//   }
//   return false;

    //One line solution
    return new Set(arguments).size !== arguments.length;
}

// function add(...args){
//     return args.reduce(function(acc, cur){
//         return acc + cur;
//     })
// }
// console.log(add(3,4,7));//14
// console.log(add(3,4,7, 14,20));//48
// console.log(add(3,4,7,8,15,20,24,26));//107
function factorial(num) {
    if(num === 1) return 1;
    return num * factorial(num - 1);
}
// console.log(factorial(10));

// Write a function called averagePair. Given a sorted array of
// integers and a target average, determine if there is a pair of
// values in the array where the average of the pair equals the
// target average. There may be more than one pair that matches
// the average target.
function averagePair(arr, average){
    if(arr.length === 0)return false;
    let current = 0;
    let next = arr.length - 1;
    let avg = 0;
    while(current < next){
        avg = (arr[current] + arr[next]) / 2;
        if(avg === average)return true;
        avg < average ? current++ : next--;
    }
    return false;
    
}
// console.log(averagePair([1,3,3,5,6,7,10,12,19], 8));
let str = 'hello';
const arr = str.split('');
// console.log(arr);

let a = 5;
let b = ++a;
// console.log(`value of a is: ${a}, value of b is: ${b}, and the value of a + b is: ${a + b}`);

// const { stdin } = require('process');
// const { stdout } = require('process');
// const readline = require('readline');

// const read1 = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// read1.question('What is your name? ', function(answer){
//     console.log(`Hello there ${answer}. Nice to meet you!`);
//     read1.close();
// })
function sum(arr, target) {
    let start = 0;
    let end = arr.length-1;
    if(arr.length === 0) return console.log('There is no array. Need array');
    
}
