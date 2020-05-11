// Given an array, rotate the array to the right by k steps, where k is non-negative.

// Follow up:

// Try to come up as many solutions as you can, there are at least 3 different ways to solve this problem.
// Could you do it in-place with O(1) extra space?

var rotate = function (nums, k) {
    const length = nums.length;
    for(let i = 0; i < k; i++){
        let lastEl = nums.splice(length - 1, 1);
        nums.unshift(lastEl[0]);
    }
    return nums
};


console.log(rotate([-1, -100, 3, 99], 2))