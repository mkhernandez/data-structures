// Given n non-negative integers representing an elevation map where the width of each bar is 1, 
// compute how much water it can trap after raining.
//Use an elevation map(graph) to demonstrate
//
// Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
// Output: 6
// Explanation: The above elevation map (black section) is represented by 
// array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) 
// are being trapped.
// The first thing that comes to mind is the pattern I see and that is that any time water is trapped 
// it's because of a grouping of elements. The way the elements are grouped is that the trap happens
// when there is a high, lowest, high combination of elements. In the example there would then be
// three groupings trapping water [1,0,2], [2,1,0,1,3], and [2,1,2]
// Another thing that stands out is that the elements on the ends will dictate how much water is 
// trapped. So in the first case it is 1 unit, then 4 units, then 1 unit 
const trap = function(height) {
    let [left, right] = [0, height.length-1];
    let [maxLeft, maxRight, trappedUnits] = [0, 0, 0];

    while(left < right) {
        
    }
}