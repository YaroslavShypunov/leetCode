// Given a non - empty array of integers, every element appears twice except for one.Find that single one.

//     Note:

// Your algorithm should have a linear runtime complexity.Could you implement it without using extra memory ?

var singleNumber = function (nums) {
    let newArray = nums;
    let i = 1;
    do{
        const length = newArray.length;
        const element = newArray[0]; 
        newArray = newArray.filter((el, index) => el !== element)
        if (length - 1 === newArray.length){
            return element
        } else if (newArray.length === 1){
            return newArray[0] 
        }
    } while (i < newArray.length)
    return false
};

console.log(singleNumber([2, 2, 1, 2, 0, 1, 9, 9, 0, 10]))