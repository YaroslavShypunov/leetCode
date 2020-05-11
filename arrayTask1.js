// Given a sorted array nums, remove the duplicates in -place such that each element appear only once and return the new length.
// Do not allocate extra space for another array, you must do this by modifying the input array in -place with O(1) extra memory.

const array = [1, 1, 2];
var removeDuplicates = function (nums) {
    var length = nums.length; 
    for (let j = 0; j < length; j++) {
        const i = nums.findIndex((el, ind) => el === nums[j] && ind !== j);
        if (i > -1) {
            nums.splice(j, 1);
            length = nums.length;
            j--;
        }
    }
    return nums.length; 
};

removeDuplicates(array)


