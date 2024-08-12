/*

Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

 

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]
Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]


1. Verify key points
Are the arrays sorted?
Will there always be two items that add to the target?
Duplicate numbers in array?


2. Double check inputs, outputs
Will there always be an array?
Will the input array be nested?
Will the target always be an int?
Return the indices as an array?

3. Main goal
Iterate through the array and check if two items add to the target

4. Brute force / naive solution
Describe the naiive solution:
Nested for loop with one pointer for each loop and checking to see if every combination of items will add to target
First for loop will have one pointer
Second for loop will have another pointer that is one ahead of the first for loop
If the sum of the number at the first pointer and the number at the second number = target, return the indices

5. Why this approach is not the best
Space and time complexity
Time complexity: a + 


*/

// ========================================================================

/* PASSES ALL TEST CASES
Time complexity: O(n^2) because of the double for loop
Space complexity: 0(1) because no data structures are being used

*/

var twoSum = function(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i+1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
            
        }
        
    }
};

// ========================================================================

/* The following solution will fail the following test case 
nums =
[2,5,5,11]
target =
10

Use Testcase
Output
[1,1]
Expected
[1,2]

The issue with the current implementation of the twoSum function lies in the inner loop, where the starting index j is always set to 1. This causes the function to potentially consider the same element twice, leading to incorrect results like [1,1].

To fix this, you should start the inner loop from the index just after i (i.e., j = i + 1).

*/
var twoSum = function(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
            
        }
        
    }
};

// ========================================================================


// https://www.youtube.com/watch?v=IufUNRCQ37E&ab_channel=ThinkFWD
const twoSum = (nums, target) => {
    let storage = {};

    for(let [index, num] of nums.entries()){
        if (storage[num] !== undefined) return [storage[num], index];
        storage[target-num] = index;
    }
}






















































/*

    // Create dictionary for all items in nums
    const indices = {};

    // Pass through nums once to create items in dictionary
    nums.forEach((item, index) => {
        // Create key-value pairs for each item in nums
        // num:index
        indices[item] = index
    });

    // 2nd pass through nums
    for (let index = 0; index < nums.length; index++) {
        // Find the complement of each num in nums
        const complement = target - nums[index];

        // 
        if (indices[complement] !== undefined && indices[complement] !== index) {
            return [index, indices[complement]]
        }
    }
*/