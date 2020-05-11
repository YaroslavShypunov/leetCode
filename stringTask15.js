// Given two strings s and t, write a function to determine if t is an anagram of s.

const fastSort = (arr) => {
    if(arr.length < 2) return arr;
    let left = [];
    let middle = arr[0];
    let right = [];
    for(let i = 1; i < arr.length; i++){
        if (arr[i] < middle) left.push(arr[i])
        else right.push(arr[i])
    }
    return [
        ...fastSort(left),
        middle,
        ...fastSort(right)
    ]
}
var isAnagram = function (s = '', t = '') {
    const firW = fastSort(s.toLowerCase().split(''));
    const secW = fastSort(t.toLowerCase().split(''));
    return firW.join('') === secW.join('')
};

isAnagram('anagram', 'nagaram')