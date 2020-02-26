class Animal {
	constructor(name, age, color, legs) {
		this.name = name;
		this.age = age;
		this.color = color;
		this.legs = legs;
	}

	get getInfo() {
		console.log(`Name: ${this.name} Age: ${this.age} Color: ${this.color} Legs: ${this.legs}`);
	}
}

class Dog extends Animal {
	constructor(name, age, color, tail) {
		super(name, age, color);
		this.legs = 4;
		this.tail = tail;
	}
}

class Cat extends Animal {
	constructor(name, age, color, tail) {
		super(name, age, color);
		this.legs = 4;
		this.tail = tail;
	}
}
