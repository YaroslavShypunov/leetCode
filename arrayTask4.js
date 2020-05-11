// Given an array of integers, find if the array contains any duplicates.

// Your function should return true if any value appears at least twice in the array, and it should return false if every element is distinct.

var containsDuplicate = function (nums) {
    if (nums.length) {
        for (let i = 0; i < nums.length; i++) {
            const result = nums.find((el, index) => nums[i] === el && index !== i);
            if (result !== false && result !== undefined) {
                return true
            }
        }
    }
    return false

};

console.log(containsDuplicate([0]));