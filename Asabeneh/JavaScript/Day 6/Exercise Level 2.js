let r = Math.random().toString(36).substring(5);
console.log(r);

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

console.log(countries);

for (let i = 0; i < countries.length; i++) {
	countries[i] = countries[i].toUpperCase();
}

console.log(countries);

for (let i = 0; i < countries.length; i++) {
	countries[i] = countries[i].length;
}

console.log(countries);
