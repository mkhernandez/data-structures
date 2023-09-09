// Given a 1-indexed array of integers numbers that is already sorted in non-decreasing order, 
// find two numbers such that they add up to a specific target number. Let these two numbers be 
// numbers[index1] and numbers[index2] where 1 <= index1 < index2 < numbers.length.

// Return the indices of the two numbers, index1 and index2, added by one as an integer 
// array [index1, index2] of length 2.

// The tests are generated such that there is exactly one solution. You may not use the same 
//element twice.

//Your solution must use only constant extra space.

let numbers = [2,7,11,15];
let numbers2 = [2, 3, 4];
let target = 9;
let target2 = 6;
var twoSum = function(numbers, target) {
    let start = 0;
    let end = numbers.length-1;

    while(start < end) {
        if(numbers[start] + numbers[end] === target) {
            return [start + 1, end + 1];
        } 
        if(numbers[start] + numbers[end] > target) {
            end--;
        } else {
            start++;
        }
    }
    return [];
};
console.log(twoSum(numbers, target));
console.log(twoSum(numbers2, target2));