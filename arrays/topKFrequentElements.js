//Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.
//Example 1:
//Input: nums = [1, 1, 1, 2, 2, 3], k = 2
//Output: [1, 2]

//Example 2: 
//Input: nums = [1], k = 1
//Output: [1]

//Problem Steps
//Create a map
//Create an array of size of nums + 1 because we want to store the value in an array at the index
//at which the number of times it occurs

var topKFrequent = function(nums, k) {
    let map = new Map();
    let arr = new Array(nums.length +1).fill(0);
};

topKFrequent([1, 1, 1, 2, 2, 3], 2);