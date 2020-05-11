// Write a function that reverses a string.The input string is given as an array of characters char[].

// Do not allocate extra space for another array, you must do this by modifying the input array in -place with O(1) extra memory.

// You may assume all the characters consist of printable ascii characters.

var reverseString = function (s) {
    const length = s.length;
    for (let i = 0; i < Math.floor(length / 2); i++) {
        const start = s[i];
        const end = s[length - i - 1];
        s[length - i - 1] = start;
        s[i] = end;
    }
    console.log(s);
};

reverseString(["h", "e", "l", "l", "o"]);