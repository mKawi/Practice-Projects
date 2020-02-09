function fullName(firstName = 'Moudi', lastName = 'Kawi') {
	console.log(`${firstName} ${lastName}`);
}

function addNumbers(num1, num2) {
	console.log(num1 + num2);
}

function areaOfRectangle(length, width) {
	console.log((length + width) * 2);
}

const PI = Math.PI;

const circleArea = (radius) => console.log(Math.floor(PI * radius * radius));

circleArea(20);

const density = (mass, volume) => console.log(mass / volume);

// Body Mass index calculator

const BMIcalc = (weight, height) => {
	const BMI = weight / (height * height);

	if (BMI < 18.5) {
		console.log('Underweight');
	} else if (BMI <= 24.9 && BMI >= 18.5) {
		console.log('Normal weight');
	} else if (BMI >= 25 && BMI <= 29.9) {
		console.log('Overweight');
	} else if (BMI >= 30) {
		console.log('Obese');
	}
};

function findMax(num1, num2, num3) {
	if (num1 > num2 && num1 > num3) {
		return num1;
	} else if (num2 > num1 && num2 > num3) {
		return num2;
	} else if (num3 > num1 && num3 > num2) {
		return num3;
	}
}
