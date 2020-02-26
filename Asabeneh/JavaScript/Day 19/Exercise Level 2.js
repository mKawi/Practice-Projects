function closure() {
	const num = 0;

	function increment() {
		num++;
		return num;
	}

	function decrement() {
		num--;
		return num;
	}

	function display() {
		return num;
	}

	return {
		increment: increment(),
		decrement: decrement(),
		display: display()
	};
}
