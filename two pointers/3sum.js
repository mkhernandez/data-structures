// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that
// i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.
//
// Notice that the solution set must not contain duplicate triplets.
//
// Example 1:
//
// Input: nums = [-1,0,1,2,-1,-4]
// Output: [[-1,-1,2],[-1,0,1]]
// Explanation: 
// nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
// nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
// nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
// The distinct triplets are [-1,0,1] and [-1,-1,2].
// Notice that the order of the output and the order of the triplets does not matter.
//
// Example 2:
//
// Input: nums = [0,1,1]
// Output: []
// Explanation: The only possible triplet does not sum up to 0.
//
// Example 3:
//
// Input: nums = [0,0,0]
// Output: [[0,0,0]]
// Explanation: The only possible triplet sums up to 0.
//
//Step 1: Create the result array const result = [];
//Step 2: Sort the nums array nums.sort((a,b) => a - b)
//Step 3: Loop through the array: for loop
//Step 4: Each iteration: check if nums[i] > 0, if so jump out of loop
//                        check if duplicate to previous, if so jump out of loop
//Step 5: if not positive and not duplicate: make a left and right pointer
//Step 6: use two pointers to find other elements added to a equal to 0

nums = [-1,0,1,2,-1,-4];
// nums = [0,1,1];
// nums = [0,0,0];
const threeSum = function(nums) {
    const result = [];
    nums.sort((a, b) => a - b);//Sort the array

    //Loop through finding the three elements that sum up to 0
    for(let i = 0; i < nums.length; i++) {
        const a = nums[i];//set the value to our a value
        if(a > 0) break;//if a is positive we jump out because positive numbers cannot add up to 0
        if(i > 0 && a === nums[i - 1]) continue;//we want no duplicates

        //If we meet the above conditions then we go to the next step and that is to use a two
        //pointer method to find the other elements when added to our a will equal 0 if they exist
        let left = i + 1;//set the left pointer
        let right = nums.length - 1;//set the right pointer

        //now loop through array from left pointer and right pointer
        while(left < right) {
            const sum = a + nums[left] + nums[right];//add up values
            //if sum greater than 0 then we need to decrement our right pointer
            if(sum > 0) {
                right--;
            }else if(sum < 0) {//if sum less than 0 we need to increment our left pointer
                left++;
            }else {//otherwise we have found our elements and need to push them into our result array
                result.push([a, nums[left], nums[right]]);
                
                //then we need to continue checking for other three sum values 
                left++;
                right--;
                //we don't want duplicates for our left or right pointer
                while(nums[left] === nums[left -1] && left < right) {
                    left++;
                }
                while(nums[right] === nums[right + 1] && left < right) {
                    right--;
                }
            }
        }
    }
    return result;
}

console.log(threeSum(nums));