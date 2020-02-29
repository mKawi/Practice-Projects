//  ==========
//  Data Types
//  ----------

const variables = 'declare all variables with const, unless you expect to reassign the value';
let assign = 'use let when value has to be reassigned';
var a = "don't use var to declare variables as they are not block-scoped";
const sym = new Symbol('should not be used in browsers as symbols cannot be faithfully polyfilled');

//  ==========
//  Objects
//  ----------

const item = new Object("this is a bad, don't create objects like this");
const another = {
	tip: 'this is the correct way of creating objects'
};

// bad
console.log(object.hasOwnProperty(key));

// good
console.log(Object.prototype.hasOwnProperty.call(object, key));

// best
const has = Object.prototype.hasOwnProperty; // cache the lookup once, in module scope.
console.log(has.call(object, key));

// or
import has from 'has'; // https://www.npmjs.com/package/has
console.log(has(object, key));

// bad
function getFullName(user) {
	const firstName = user.firstName;
	const lastName = user.lastName;

	return `${firstName} ${lastName}`;
}

// good
function getFullName(user) {
	const { firstName, lastName } = user;
	return `${firstName} ${lastName}`;
}

// best
function getFullName({ firstName, lastName }) {
	return `${firstName} ${lastName}`;
}

//  ==========
//  Arrays
//  ----------

// bad
const items = new Array();

// good
const items = [];

const someStack = [];

// bad
someStack[someStack.length] = 'abracadabra';

// good
someStack.push('abracadabra');
