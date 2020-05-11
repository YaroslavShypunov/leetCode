// Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

var moveZeroes = function (nums = []) {
    for(let i = nums.length; i >= 0; i--){
        if(nums[i] === 0){
             nums.splice(i,1);
             nums.push(0);
        }
    }
    return nums
};


console.log(moveZeroes([0, 1, 0, 3, 12]));