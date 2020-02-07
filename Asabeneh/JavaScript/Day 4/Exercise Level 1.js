let age = prompt('Enter your age:');

if (age >= 18) {
	alert('You are old enough to drive!');
} else {
	alert(`You must wait ${18 - age} years before you can drive!`);
}

const myAge = 23;
let yourAge = prompt('How old are you?');

if (myAge < yourAge) {
	alert(`You are ${yourAge - myAge} years older`);
} else if (myAge > yourAge) {
	alert(`I am ${myAge - yourAge} years older`);
} else {
	alert("We're the same age!");
}

let a = Number(prompt('Value of a:'));
let b = Number(prompt('Value of b:'));

a > b ? console.log('a is greater than b') : console.log('a is less than b');

let userNum = Number(prompt('Enter a number:'));
userNum % 2 === 0 ? alert(`${userNum} is an even number`) : alert(`${userNum} is an odd number`);
