/*
    Use the reduce method in combination with the concat method to “flatten”
    an array of arrays into a single array that has all the elements of 
    the original arrays.
*/

const nestedArray = [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ], [ 10, 11, 12 ], [ 13, 14, 15 ] ];

const singleArray = nestedArray.reduce((arr, current) => arr.concat(current), []);
