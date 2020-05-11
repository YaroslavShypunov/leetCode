// Given a 32 - bit signed integer, reverse digits of an integer.

var reverse = function (x) {
    const positive = x > 0 ? 1 : -1;
    let str = x.toString();
    str = parseInt(str.split('').reverse().join(''));
    if (str > 0x7FFFFFFF){
        return 0;
    }
    return str * positive
};

console.log(reverse(123));