/*


1. Write down the key points at the top

// Given 2 arrays, create a function that
let's a user know (true/false) whether
these two arrays contain any common items
// For Example:
// const array1 = ['a','b','c','x'];
// const array2 ['z','y','i'];
// should return false.

// const array1 = ['a','b','c','x']; 
// const array2 = ['z','y','x'];
// should return true.

2. What are the inputs? What are the outputs?
Two parameters, arrays, no size limit
Return true or false

3. What is the most important value of the problem? Do you have time, and space and memory,
etc.. What is the main goal?

4. Start with the naive/brute force approach. First thing that comes into mind. It shows that
you’re able to think well and critically (you don't need to write this code, just speak about it).
Looks like we have a nested for loop where we would be comparing the first item in the first array to all of the items in the second array
This approach is not the best because it is not efficient O(n^2) time complexity

function containsCommonItem (arr1, arr2) {
    for (let i=0; i < arr1.length; i++) {
        for (let j=0; j < arr2.length; j++) {
            if (arr1[i] === arr2[j]) {
                return true;
            }
        }
    }
    return false
}

containsCommonItem()

if array sizes are the same, big O would be O(n^2), if they are different big O would be O(a*b)


*/





// Naive solution

const array1 = ['a','b','c','x']; 
const array2 = ['z','y','x'];

function containsCommonItem (arr1, arr2) {
    for (let i=0; i < arr1.length; i++) {
        for (let j=0; j < arr2.length; j++) {
            if (arr1[i] === arr2[j]) {
                return true;
            }
        }
    }
    return false
}

containsCommonItem(array1, array2)