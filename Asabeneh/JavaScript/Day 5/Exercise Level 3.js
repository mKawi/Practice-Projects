const ages = [ 19, 22, 19, 24, 20, 25, 26, 24, 25, 24 ];
console.log(ages.sort());

const minAge = ages.sort().shift();
console.log(minAge);

const maxAge = ages.sort().pop();
console.log(maxAge);

const median = (ages.sort()[4] + ages.sort()[5]) / 2;
console.log(median);

const average = ages.reduce((a, b) => a + b, 0);
console.log(average);
