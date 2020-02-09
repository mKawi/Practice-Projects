function solveLinEquation(ax, by, c) {
	return ax + by + c;
}

function printArray(arr) {
	for (let i = 0; i < arr.length; i++) {
		console.log(arr[i]);
	}
}

function capitalizeArray(arr) {
	const capital = arr;
	capital[0].toUpperCase();
	return capital;
}

const arr = [];

function addItem(item) {
	arr.push(item);
	return arr;
}

function removeItem(item) {
	delete arr[item];
	return arr;
}

function arraySums(arr) {
	let sum = 0;
	for (let index of arr) {
		sum += index;
	}
	return sum;
}
