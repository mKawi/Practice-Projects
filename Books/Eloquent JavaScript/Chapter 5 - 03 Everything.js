/*
    Implement every as a function that takes an array and a predicate function
    as parameters. Write two versions, one using a loop and one using 
    the some method.
*/

function everyfn(arr, fn) {
	for (let i = 0; i < arr.length; i++) {
		if (!fn(i)) return false;
	}
	return true;
}

function everyv2(arr, fn) {
	return !arr.some((el) => !fn(el));
}
