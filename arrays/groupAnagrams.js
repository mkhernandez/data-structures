//Given an array of strings, group the anagrams together
//You can return the answer in any order
//An anagram is a word or phrase formed by rearranging
//the letter of a different word or phrase, typically
//using all the original letters exactly once
//Problem steps

//Create an empty hashMap
//Map the character count to the list of anagrams
//Setup a count of each lower case letter of alphabet
//For each string
//Iterate over each string and find the index 
//of the character a = 97 so char a - char a = 0 index
//b = 98 so char b - char a = 1 so index 1 and so on

let strs = ["eat","tea","tan","ate","nat","bat"];

function groupAnagram(strs) {
    let map = new Map();
    strs.forEach(str => {
        let sorted = str.split('').sort().join('');
        if(map.has(sorted)) {
            map.set(sorted, [...map.get(sorted), str ]);
        } else {
            map.set(sorted, [str]);
        }
    });
    return Array.from(map.values());
}
console.log(groupAnagram(strs));


// console.log(strs[0].charCodeAt(1));