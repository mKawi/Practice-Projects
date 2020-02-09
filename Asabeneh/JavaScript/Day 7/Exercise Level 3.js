function rgbColorGenerator() {
	console.log(
		`rgb(${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)})`
	);
}

function arrayOfHexaColors(num) {
	let array = [];
	const hex = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f' ];
	const random = () => Math.floor(Math.random() * 16);
	let hexaColor = () =>
		`#${hex[random()]}${hex[random()]}${hex[random()]}${hex[random()]}${hex[random()]}${hex[random()]}`;
	for (let i = 0; i < num; i++) {
		array.push(hexaColor());
	}
	return array;
}

function arrayOfRgbColors(num) {
	let array = [];
	for (let i = 0; i < num; i++) {
		array.push(rgbColorGenerator());
	}
	return array;
}
