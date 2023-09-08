//Given an integer array nums, return an array answer such that answer[i] is 
//equal to the product of all the elements of nums except nums[i]
//The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer
//You must write an algorithm that runs in O(n) time and without using the division operation
let nums = [1, 2, 3, 4];//Output should be [24, 12, 8, 6]
let nums2 = [-1,1,0,-3,3];//Output should be [0,0,9,0,0]
var productExceptSelf = function(nums) {
    let result = [];//Output array
    let pre = 1;//product of everything before the value
    let post = 1;//product of everything after the value
    //loop through the array finding the product before the value
    for(let i = 0; i < nums.length; i++) {
        result[i] = pre;
        pre = pre * nums[i];
    }
    //loop through the array finding everyting after the value and multiplying to what is in 
    //the output array
    for(let i = nums.length-1; i >= 0; i--) {
        result[i] = result[i] * post;
        post = post * nums[i];
    }
    return result;
}
productExceptSelf(nums);
productExceptSelf(nums2);