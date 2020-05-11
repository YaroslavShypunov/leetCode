// Given two arrays, write a function to compute their intersection.

var intersect = function (nums1, nums2) {
    let { smalllerArray, biggerArray } = nums1.length > nums2.length 
    ? { smalllerArray: [...nums1], biggerArray: [...nums2] } 
    : { smalllerArray: [...nums2], biggerArray: [...nums1] };
    const result = []; 
    for(let i = 0; i < smalllerArray.length; i++){
        const element = smalllerArray[i]
        const index = biggerArray.findIndex((el) => el === smalllerArray[i]);
        if(index > -1){
            result.push(element);
            biggerArray.splice(index, 1);
        }
    }
    return result;
};

console.log(intersect([4, 9, 5], []));