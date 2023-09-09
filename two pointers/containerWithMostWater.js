// You are given an integer array height of length n. There are n vertical lines drawn such that
// the two endpoints of the ith line are (i, 0) and (i, height[i]).

// Find two lines that together with the x-axis form a container, such that the container 
// contains the most water.

// Return the maximum amount of water a container can store.

// Notice that you may not slant the container.
// Problem Steps
// I notice that they want the area to be returned which is length X height (maxArea)
// Also the length changes as the pointers move so length will be at max at the beginning but then
// decrease by one every time a pointer is moved (initially: length = arr.length - 1)
// We want to keep the pointer with the max height always so checking the max height 
// between pointers before moving pointer (arr[left] > arr[right] move right pointer(right--))
// The pointers will start at the ends of the array left = 0 and right = arr.length - 1
// Area = length * (Math.min(arr[left], arr[right]))
let height = [1,8,6,2,5,4,8,3,7];
const maxArea = function(height) {
    let [left, right, maxArea] = [0, height.length-1, 0];
    
    while(left < right) {
        let containerHeight, area;
        let containerWidth = right - left;
        
        if(height[left] > height[right]) {
            containerHeight = height[right];
            right--;
        } else {
            containerHeight = height[left];
            left++;
        } 
        area = containerHeight * containerWidth;
        if(area > maxArea) {
            maxArea = area;
        }
    }
    return maxArea;
}
console.log(maxArea(height));
