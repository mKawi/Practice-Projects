const countries = [
	'Albania',
	'Bolivia',
	'Canada',
	'Denmark',
	'Ethiopia',
	'Finland',
	'Germany',
	'Hungary',
	'Ireland',
	'Japan',
	'Kenya'
];

const webTechs = [ 'HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node', 'MongoDB' ];

const mernStack = [ 'MongoDB', 'Express', 'React', 'Node' ];

const copy = countries;

const land = countries.filter((index) => {
	if (index.includes('land')) {
		delete index;
	} else {
		return index;
	}
});

console.log(land);

const fiveLetters = countries.filter((index) => {
	if (index.length === 5) {
		delete index;
	} else {
		return index;
	}
});

console.log(fiveLetters);
