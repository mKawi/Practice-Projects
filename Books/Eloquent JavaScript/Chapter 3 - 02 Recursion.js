/*
    Define a recursive function 'isEven' corresponding to this description:

    - Zero is even
    - One is odd
    - For any other number N, it's evenness is the same as N - 2
    - You should not use the % operator

    This function should accept a single parameter (a positive, whole number) and return a Boolean.

    Test it on 50 and 75. See howit behaves on -1. Why? Can you think of a way to fix this?
*/

function isEven(n) {
	if (n === 0) {
		return true;
	} else if (n === 1) {
		return false;
	} else if (n < 0) {
		return isEven(n + 2);
	} else {
		return isEven(n - 2);
	}
}

isEven(50);
