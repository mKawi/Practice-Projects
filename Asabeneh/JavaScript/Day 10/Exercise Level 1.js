const countries = [ 'Finland', 'Sweden', 'Norway' ];

const emptySet = new Set();

console.log(emptySet);

for (let i = 0; i <= 10; i++) {
	emptySet.add(i);
}

console.log(emptySet);

emptySet.delete(0);

console.log(emptySet);

emptySet.clear();

console.log(emptySet);

const arr = [ 'apple', 'orange', 'pear', 'strawberries', 'melon' ];

const strSet = new Set(arr);

console.log(strSet);

const countriesMap = new Map();

countriesMap.set(countries[0], countries[0].length);
countriesMap.set(countries[1], countries[1].length);
countriesMap.set(countries[2], countries[2].length);
