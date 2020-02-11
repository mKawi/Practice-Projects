const dog = {};

console.log(dog);

dog.name = 'Shiloh';
dog.legs = 4;
dog.color = 'Brown and white';
dog.age = 3;
dog.bark = function() {
	console.log('awooooo!');
};
dog.breed = 'Husky';
dog.getDogInfo = function() {
	console.log(dog);
};
