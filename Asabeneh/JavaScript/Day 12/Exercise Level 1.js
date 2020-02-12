const sentence =
	'He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.';

const extractNums = /\d+/g;
const arr = sentence.match(extractNums);

console.log(arr);

let salary = arr[0];
let annualBonus = arr[1];
let passiveIncome = arr[2];

let totalAnnualIncome = Number(salary) + Number(annualBonus) + Number(passiveIncome);

console.log(totalAnnualIncome);

const points = [ '-12', '-4', '-3', '-1', '0', '4', '8' ];

const extract = /[\-\d]+/g;
const numArr = points.join(', ').match(extract);

const diff = Math.abs(Number(numArr[0]) - Number(numArr[numArr.length - 1]));

console.log(numArr);
console.log(diff);
