const countries = [ 'Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand' ];
const names = [ 'Asabeneh', 'Mathias', 'Elias', 'Brook' ];
const numbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
const products = [
	{ product: 'banana', price: 3 },
	{ product: 'mango', price: 6 },
	{ product: 'potato', price: ' ' },
	{ product: 'avocado', price: 8 },
	{ product: 'coffee', price: 10 },
	{ product: 'tea', price: '' }
];

// forEach

countries.forEach((el) => console.log(el));
names.forEach((el) => console.log(el));
numbers.forEach((el) => console.log(el));

// map

const countryCapital = countries.map((el) => el.toUpperCase());
const countryLength = countries.map((el) => el.length);
const squares = numbers.map((num) => num * num);
const upperNames = names.map((name) => name.toUpperCase());
const productMap = products.map((obj) => `${obj.product} costs ${obj.price}`);

// filter

const land = countries.filter((country) => country.includes('land'));
const sixChars = countries.filter((country) => country.length === 6);
const sixLetters = countries.filter((country) => country.length >= 6);
const startE = names.filter((name) => name[0] === 'E');
const priceOnly = products.filter((obj) => obj.price !== '' && obj.price !== ' ');

// reduce

const sum = numbers.reduce((a, b) => a + b, 0);

// some & every

const nameLength = names.some((el) => el.length > 7);
const countryLand = countries.every((country) => country.includes('land'));

// find & findIndex

const firstCountry = countries.find((country) => country.length === 6);
const firstPosition = countries.findIndex((country) => country.length === 6);
const countryIndex = countries.findIndex((country) => country === 'Norway');
const country2ndIndex = countries.findIndex((country) => country === 'Russia');

console.log(country2ndIndex);
