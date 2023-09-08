// Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

// Each row must contain the digits 1-9 without repetition.
// Each column must contain the digits 1-9 without repetition.
// Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
// Note:

// A Sudoku board (partially filled) could be valid but is not necessarily solvable.
// Only the filled cells need to be validated according to the mentioned rules.
//Problem Steps
//These steps can be done in nested for loops
//Step 1: set up sets for row, column, and square in outer loop
//Step 2: in the inner for loop create a rowValue, columnValue, and squareValue holder for values
//for the square value the board is setup in a 3X3 so some math involved to set up outer rows,columns
//Step 3: check row to see if rowValue === '.', if so keep iterating, if exists return false, if not add it to the row
//Step 4: check column if columnValue === '.', if so keep iterating, if value exists return false, if not add it to the column
//Step 5: check square if squareValue is '.', if so keep going, if value return false, if not add value to square
//Step 6: if no duplicates return true

var isValidSudoku = function(board) {
    //Create the row, column, and square set for each row, column, and square
    for(let i = 0; i < 9; i++) {
        let columns = new Set(),
            rows = new Set(),
            square = new Set();
           
        //Now get each row item and board item from the board
        for(let j = 0; j < 9; j++) {
            let rowValue = board[i][j];
            let columnValue = board[j][i];
            let squareValue = board[3 * Math.floor(i/3) + Math.floor(j/3)][3 * (i%3) + (j%3)];

            //check the row in the set and see if it has a '.' or rowValue. We want to ignore '.'
            //and go to the next one. We only want the integers
            if(rowValue != '.') {
                if(rows.has(rowValue)) return false;
                rows.add(rowValue);
            }
            //Check the column in the set and see if it has a '.' or columnValue
            if(columnValue != '.') {
                if(columns.has(columnValue)) return false;
                columns.add(columnValue);
            }
            //Do the same for the 3X3 square
            if(squareValue != '.') {
                if(square.has(squareValue)) return false;
                square.add(squareValue);
            }
        }    
        
    }
    return true;
};