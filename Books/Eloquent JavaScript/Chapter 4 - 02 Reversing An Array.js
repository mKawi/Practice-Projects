/*
    For this exercise, write two functions, reverseArray
    and reverseArrayInPlace. The first, reverseArray, takes an array as argument
    and produces a new array that has the same elements in the inverse order. 
    
    The second, reverseArrayInPlace, does what the reverse method does: it modifies
    the array given as argument by reversing its elements. Neither may use the
    standard reverse method.
*/

function reverseArray(arr) {
	const newArr = [];
	for (let i = arr.length; i >= 0; i--) {
		newArr.push(arr[i]);
	}
	return newArr;
}

function reverseArrayInPlace(arr) {
	for (let i = 0; i < Math.floor(arr.length / 2); i++) {
		let old = arr[i];
		arr[i] = arr[arr.length - 1 - i];
		arr[arr.length - 1 - i] = old;
	}
	return arr;
}
