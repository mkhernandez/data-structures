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
    let map = new Map();//map the value and frequency
    let arr = new Array(nums.length +1).fill(0);//bucket array
    let result = [];//array to hold the result

    //loop through the nums array and map the frequency
    for(const num of nums) {
        map.set(num, (map.get(num) || 0) + 1);
    }
    //loop through the map and add to corresponding index the 
    //frequency
    for(let [num, freq] of map) {
        arr[freq] = (arr[freq] || new Set()).add(num);
    }
    //loop through the bucket array(arr) and find the ones with the most frequency
    //and add them to the result array
    for(let i = arr.length-1; i >= 0;i--) {
        if(arr[i]) result.push(...arr[i]);
        if(result.length === k) break;
    }
    return result;
};

console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2));