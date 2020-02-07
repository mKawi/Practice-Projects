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

const emptyArray = [];

console.log(countries.length);
console.log(webTechs);

const companies = [ 'Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon' ];

for (let i = 0; i < companies.length; i++) {
	for (let j = 0; j < companies[i].length; j++) {
		if (companies[i][j] === 'o') {
			console.log(companies[i]);
		}
	}
}
