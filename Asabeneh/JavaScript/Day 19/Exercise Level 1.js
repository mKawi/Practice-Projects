function closure() {
	let counter = 0;

	function increment() {
		counter++;
		return counter;
	}

	return increment;
}
