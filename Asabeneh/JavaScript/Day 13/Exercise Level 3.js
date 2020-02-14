let randomNum = Math.floor(Math.random() * 101);

console.time('While Loop');

let counterA = [ 0 ];

while (counterA.length < 10) {
	counterA.push(randomNum);
}
console.timeEnd('While Loop');

console.time('For Loop');

let counterB = [ 0 ];

for (let i = 0; i < 10; i++) {
	counterB.push(randomNum);
}

console.timeEnd('For Loop');

console.time('For of Loop');

let counterC = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ];

for (let num of counterC) {
	num++;
}

console.timeEnd('For of Loop');

console.time('forEach Loop');

let counterD = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ];

counterD.forEach((num) => num++);

console.timeEnd('forEach Loop');
