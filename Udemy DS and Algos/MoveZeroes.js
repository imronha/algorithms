/*
Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Note that you must do this in-place without making a copy of the array.

 

Example 1:

Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]
Example 2:

Input: nums = [0]
Output: [0]
 

Constraints:

1 <= nums.length <= 104
-231 <= nums[i] <= 231 - 1

*/


/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var moveZeroes = function(nums) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
            nums.splice(i, 1);
            nums.push(0);
        }
        
    }
};

var moveZeroes = function(nums) {
    let left = 0;
    for (let right = 1; right < nums.length; right++) {
        if (nums[left] != 0) {
            var temp = nums[left];
            nums[left] = nums[right];
            nums[right] = temp;
        }
        
    }
};


/*
Using a two pointer approach i.e. read, write pointers. We'll move from the start to the end of the array.

While moving the read pointer toward the end of the array.
If the value at read pointer is non zero; we will set the value at write pointer to the value at the read pointer, then we increment the write and read pointers.
This allows us to only write a non-zero value into the write pointer index.
But if the value at the read pointer is "0", we only increment the read pointer.
Once the read pointer arrives at the end of the array, if there are zeros in the array the write pointer will still be behind, so we start assigning zero to all the values from the write pointer to the nth index.
var moveZeroes = function(nums) {
    // return if the list is empty 
    if (nums.length < 1) {
        return;
    }
	
	// get the length of the array
    const numsLength = nums.length - 1;

	// initialize the pointer variables to 0
    let readIndex = 0;
    let writeIndex = 0;

    // as long as the readIndex is not at the end of the array
    while (readIndex <= numsLength) {
        if (nums[readIndex] != 0) {
            // set the value at writeIndex to the value at the readIndex
            nums[writeIndex] = nums[readIndex];

            // move the writeIndex forward
            writeIndex++;
        }

        // increment readIndex toward the end of the array
        readIndex++;
    }

    // replacing the rest of values from write pointer to zero
    while (writeIndex <= numsLength) {
        nums[writeIndex] = 0;

        writeIndex++;
    }

    return nums;
};

*/