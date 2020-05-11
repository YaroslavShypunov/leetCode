// Determine if a 9x9 Sudoku board is valid.Only the filled cells need to be validated according to the following rules:

// Each row must contain the digits 1 - 9 without repetition.
// Each column must contain the digits 1 - 9 without repetition.
// Each of the 9 3x3 sub - boxes of the grid must contain the digits 1 - 9 without repetition.


const findIndex = (array) => {
    for (let j = 0; j < array.length; j++) {
        if (array.findIndex((el, index) => el === array[j] && index !== j && el !== '.') > -1)
            return true
    }
}
var isValidSudoku = function (board) {
    for (let i = 0; i < board.length; i++) {
        if (findIndex(board[i])) return false;

        const checkTwo = board.map((el) => el[i]);
        if (findIndex(checkTwo)) return false;
    }
    for (let s = 0; s < board.length / 3; s++) {
        for (let z = 0; z < board.length / 3; z++) {
            const array = [];
            for (let i = s * 3; i < s * 3 + 3; i++) {
                for (let j = z * 3; j < z * 3 + 3; j++) {
                    array.push(board[i][j]);
                }
            }
            if (findIndex(array)) return false;
        }
    }


    return true
};


console.log(isValidSudoku([
    ["5", "3", ".", ".", "7", ".", ".", ".", "."],
    ["6", ".", ".", "1", "9", "5", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", "6", "."],

    ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],

    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"]
]));