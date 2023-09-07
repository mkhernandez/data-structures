//Check if string two is an anagram 
//Anagram is when the letters of the second string make
//another word with the same letters of the first string
//Problem steps
//Create two empty objects
//loop through the first string and put them into a hashmap
//loop through second string and create second hashmap
//check length of each hashmap, if length same continue
//if not return false(no anagram)
//Check to see if all keys are in both hashmaps
//if not return false (no anagram)
//if true then check for the frequency of each key
//if not return false (no anagram)
//return true if everything checks out

var isAnagram = function(s, t) {
    let frequency1 = {};
    let frequency2 = {};
    for(const val1 of s) {
        frequency1[val1] = (frequency1[val1] || 0) + 1;
    }
    for(const val2 of t) {
        frequency2[val2] = (frequency2[val2] || 0) + 1;
    }
    if(Object.keys(frequency1).length !== Object.keys(frequency2).length) {
        return false;
    }
    for(const key in frequency1) {
        if(!(key in frequency2)) {
            return false;
        }
        if(frequency1[key] !== frequency2[key]) {
            return false;
        }
    }
    return true;
};

