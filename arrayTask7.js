// Given a non - empty array of digits representing a non - negative integer, plus one to the integer.

// The digits are stored such that the most significant digit is at the head of the list, and each element in the array contain a single digit.

// You may assume the integer does not contain any leading zero, except the number 0 itself.

var plusOne = function (digits) {
    const lastIndex = digits.length - 1;
    digits[lastIndex]++;
    digits = checkDigits(digits, lastIndex);
    return digits;
};

const checkDigits = (digits, lastIndex) => {
    if (digits[lastIndex] === 10) {
        if (lastIndex - 1 > -1) {
            digits[lastIndex - 1]++;
            digits[lastIndex] = 0;
            if (digits[lastIndex - 1] === 10) {
                digits = checkDigits(digits, lastIndex - 1);
            }
        } else {
            digits[lastIndex] = 0;
            digits.unshift(1);
        }
   
    }
   
    return digits
}
console.log(plusOne([9, 9, 9]))