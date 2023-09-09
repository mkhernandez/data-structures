// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters 
// and removing all non-alphanumeric characters, it reads the same forward and backward. 
// Alphanumeric characters include letters and numbers.
// Given a string s, return true if it is a palindrome, or false otherwise.
let s = "A man, a plan, a canal: Panama";
let s2 = "race a car";
let s3 = " ";
var isPalindrome = function(s) {
    //Create a non-alphanumeric string
    let str = s.replace(/[^a-z0-9]/gi, '').toLowerCase();
    let start = 0;
    let end = str.length-1;

    //Loop through the string with two pointers one at the beginning and one at the end
    while(start < end) {
        if(str[start] !== str[end]) {
            return false;
        } else {
            start++;
            end--;
        }
    }
    return true;
};
console.log(isPalindrome(s));
console.log(isPalindrome(s2));
console.log(isPalindrome(s3));