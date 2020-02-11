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

const totalPrice = products
	.map((obj) => obj.price)
	.filter((price) => price !== '' && price !== ' ')
	.reduce((a, b) => a + b, 0);
const categorizeCountries = (pattern) => {
	console.log(countries.filter((el) => el.includes(pattern)));
};

categorizeCountries('and');
