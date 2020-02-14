const throwErroExampleFun = () => {
	let message;
	let x = prompt('Enter a number: ');
	try {
		if (x == '') throw 'empty';
		if (isNaN(x)) throw 'not a number';
		x = Number(x);
		if (x < 5) throw 'too low';
		if (x > 10) throw 'too high';
	} catch (err) {
		console.log(err);
	}
};
throwErroExampleFun();

let firstName = 'Asabeneh';
let fullName = firstName + ' ' + lastName;

console.log(fullName);

let square = 2 * 2;

console.log(square);

console.log('Hello, world');

let num = 10;
console.log(num.toLowerCase());
