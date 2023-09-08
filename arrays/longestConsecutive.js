// Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.

// You must write an algorithm that runs in O(n) time.
// Example 1:

// Input: nums = [100,4,200,1,3,2]
// Output: 4
// Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.
// Example 2:

// Input: nums = [0,3,7,2,5,8,4,6,0,1]
// Output: 9
//Problem Steps
//Create the hashset with the array of nums
//Create a variable for the consecutive number
//Loop through the hashset and for each one we want to know if 
//there is a value smaller than the current value by 1 meaning
//are we at the leftmost starting point of the sequence of 
//consecutive elements
//
let nums = [100,4,200,1,3,2];
var longestConsecutive = function(nums) {
    const hashSet = new Set(nums);//Create hashset with array
    let consecutive = 0;
    for(let num of hashSet) {
        //We want to make sure we start at the beginning of the sequence
        if(hashSet.has(num - 1)) continue;
        //We set the current number to currentNumber and currentConsecutive because we want to 
        //see if what the consecutive values are for this current value
        let currentNumber = num;
        let currentConsecutive = 1;
        //We only jump into the while loop when we are at the beginning of a sequence
        while(hashSet.has(currentNumber + 1)) {
            currentNumber++;
            currentConsecutive++;
        }
        consecutive = Math.max(consecutive, currentConsecutive);
    }
    return consecutive;
};
console.log(longestConsecutive(nums));