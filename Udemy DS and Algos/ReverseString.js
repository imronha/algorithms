/* Write a function that reverses a string. The input string is given as an array of characters s.

You must do this by modifying the input array in-place with O(1) extra memory.

 

Example 1:

Input: s = ["h","e","l","l","o"]
Output: ["o","l","l","e","h"]
Example 2:

Input: s = ["H","a","n","n","a","h"]
Output: ["h","a","n","n","a","H"]
 

Constraints:

1 <= s.length <= 105
s[i] is a printable ascii character.

*/


var reverseString = function(s) {
    var right = s.length-1;

    for (let i = 0; i < Math.floor(s.length/2); i++) {
        var temp = s[i];
        s[i] = s[right];
        s[right] = temp;
        right--;
    }
    return s;
}


// Udemy video answer:
// https://www.udemy.com/course/master-the-coding-interview-data-structures-algorithms/learn/lecture/12308764#overview

function reverse(str) {
    // Check input
    if(!str || str.length < 2 || typeof str !== 'string'){
        return "Not a string";
    }
    const backwards = [];
    const totalItems = str.length - 1;
    for (let i = totalItems; i >=0; i--) {
        backwards.push(str[i]);
    }

    console.log(backwards);

    return backwards.join('');
}


function reverse2(){
    return str.split('').reverse().join('');
}


const reverse3 = str = () => [...str].reverse().join('');