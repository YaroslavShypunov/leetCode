// You are given an n x n 2D matrix representing an image.

// Rotate the image by 90 degrees(clockwise).

//     Note:

// You have to rotate the image in -place, which means you have to modify the input 2D matrix directly.DO NOT allocate another 2D matrix and do the rotation.

var rotate = (matrix) => (
    matrix.map((row, index) =>
        row.map((el, j) =>
            matrix[matrix.length - j - 1][index]
        )
    )
);

const array = [];
array.forEach

console.log(rotate([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));