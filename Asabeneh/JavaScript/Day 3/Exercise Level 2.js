const base = prompt('Enter base:');
const height = prompt('Enter height:');
const area = alert(`The area of the triangle is ${0.5 * base * height}`);

const sideA = prompt('Enter side a:');
const sideB = prompt('Enter side b:');
const sideC = prompt('Enter side c:');
const perimeter = alert(`The perimeter of the triangle is ${sideA + sideB + sideC}`);

const length = prompt('Enter length:');
const width = prompt('Enter width:');
const areaPeri = alert(`The area is ${length * width} and the perimeter is ${length * 2 + width * 2}`);

const PI = Math.PI;
const radius = prompt('Enter the radius of the circle:');
const area = alert(`The area of the circle is ${PI * radius * radius} and the circumference is ${2 * PI * radius}`);

const hours = prompt('How many hours do you work a week?');
const rate = prompt('What is your hourly rate?');
const weeklyEarning = alert(`Your weekly earning is ${hours * rate}`);

const yourName = prompt('What is your name?');
if (yourName.length > 7) {
	alert('Your name is long');
} else {
	alert('Your name is short');
}

let myAge = 230;
let yourAge = 23;
alert(`I am ${myAge - yourAge} years older than you.`);
