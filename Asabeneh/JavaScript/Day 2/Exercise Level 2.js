console.log(
	"The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another."
);

console.log(
	`"Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."`
);

console.log(typeof '10'); // String
console.log(typeof 10); // Number

console.log('10' === 10); // False
console.log(+'10' === 10); // True

console.log(parseFloat('9.8') === 10); // False
console.log(Math.round('9.8') === 10); // True

console.log('python'.includes('on') && 'jargon'.includes('on'));
'I hope this course is not full of jargon'.includes('jargon');

Math.floor(Math.random() * 101);
Math.floor(Math.random() * 51) + 50;
Math.floor(Math.random() * 256);

console.log('JavaScript'[Math.floor(Math.random() * 9)]);

let numberWall = '1 1 1 1 1\n2 1 2 4 8\n3 1 3 9 27\n4 1 4 16 64\n5 1 5 25 125';
console.log(numberWall);

'You cannot end a sentence with because because because is a conjunction'.substr(31, 24);
