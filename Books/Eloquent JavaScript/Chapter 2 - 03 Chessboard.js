/*
    Write a program that creates a string that represents an 8 x 8 grid, using
    newline characters to seperate lines. At each position of the grid there is
    either a space or a "#" character. The characters should form a chessboard.

    Passing this string to console.log should show something like this:

     # # # #
    # # # #
     # # # #
    # # # #
     # # # #
    # # # #
     # # # #
    # # # #

    When you have a program that generates this pattern, define a binding size = 8
    and change the program so that it works for any size, outputting a grid of
    the given width and height.
*/

const chessBoard = (height = 8, width = 8) => {
	let rowCounter = 0;
	let oddRow = '';
	let evenRow = '';

	const hash = '#';
	const space = ' ';

	let grid = '';

	// Row Constructor
	for (let i = 0; i < width; i++) {
		if (i % 2 === 0) {
			oddRow += space;
			evenRow += hash;
		} else {
			oddRow += hash;
			evenRow += space;
		}
	}

	// Column Constructor
	for (let j = 0; j < height; j++) {
		if (rowCounter % 2 !== 0) {
			grid += evenRow + (j === height - 1 ? '' : '\n');
		} else {
			grid += oddRow + (j === height - 1 ? '' : '\n');
		}
		rowCounter++;
	}

	// Output Grid
	console.log(grid);
};

chessBoard();
chessBoard(10, 20);
