// Given a string, find the first non - repeating character in it and return it's index. If it doesn't exist, return -1.

var firstUniqChar = function (s) {
    const array = s.split('');
    return array.findIndex((el) => array.indexOf(el) === array.lastIndexOf(el));
};

console.log(firstUniqChar("llee"))