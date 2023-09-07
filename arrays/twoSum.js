//Find the two numbers that add up to the target value
//Problem steps
//Create an empty object
//Create an empty array
//Create a difference variable to hold the difference between
//the target and the current value being evaluated
//Loop through the array, for each step:
//Find difference
//Check if difference in hashmap
//if(diff in hashMap) means we found what we need 
//temp.push(hashMap[diff], i) push index values
//return temp
//else hashMap[arr[i]] = i put the arr.value as the key and
//arr[i] as the value in the hashmap 

let nums = [2, 1, 5, 3];
function twoSums(arr, target) {
    let hashMap = {};
    let temp = [];
    let diff = 0;
    for(let i = 0; i < arr.length; i++) {
        diff = target - arr[i];
        if(diff in hashMap) {
            temp.push(hashMap[diff], i);
            return temp;
        } else {
            hashMap[arr[i]] = i;
        }
        
    }
    
}
let value = twoSums(nums, 4);
console.log(value);