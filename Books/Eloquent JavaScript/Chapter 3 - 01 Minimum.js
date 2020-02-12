/* 
    Write a function call min that takes two arguments and returns their minimum
*/

const min = (num1, num2) => {
	if (num1 > num2) {
		return num2;
	} else if (num1 < num2) {
		return num1;
	} else {
		return "They're both equal";
	}
};
