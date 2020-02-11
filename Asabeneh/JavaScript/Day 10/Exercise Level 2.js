const a = [ 4, 5, 8, 9 ];
const b = [ 3, 4, 5, 7 ];
const c = [ ...a, ...b ];

const union = new Set(c);

console.log(union);

const d = a.filter((num) => b.includes(num));
const intersection = new Set(d);

console.log(intersection);

const e = a.filter((num) => !b.includes(num));
const difference = new Set(2);

console.log(difference);
