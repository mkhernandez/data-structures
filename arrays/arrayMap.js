// Given an integer array arr and a mapping function fn, return a new array with a transformation 
// applied to each element.

// The returned array should be created such that returnedArray[i] = fn(arr[i], i).

// Please solve it without the built-in Array.map method.

const map = function(arr, fn) {
    const newArray = [];
    // traditional for loop method
    // TC and SC: O(n)
    for(let i = 0; i < arr.length; i++) {
        newArray[i] = fn(arr[i], i);
    }

    // foreach method
    // TC and SC: O(n)
    arr.forEach((element, index) => {
        newArray[index] = fn(element, index);
    });

    // reduce method
    // TC and SC: O(n)
    return arr.reduce((newArray, element, index) => {
        newArray[index] = fn(element, index);
        return newArray;
    }, []);

    // for of loop method
    // TC and SC: O(n)
    let index = 0;
    for(const element of arr) {
        newArray[index] = fn(element, index);
        index++;
    }
    return newArray;
}