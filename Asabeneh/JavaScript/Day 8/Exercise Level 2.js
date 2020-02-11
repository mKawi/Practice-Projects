const users = {
	Alex: {
		email: 'alex@alex.com',
		skills: [ 'HTML', 'CSS', 'JavaScript' ],
		age: 20,
		isLoggedIn: false,
		points: 30
	},
	Asab: {
		email: 'asab@asab.com',
		skills: [ 'HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node' ],
		age: 25,
		isLoggedIn: false,
		points: 50
	},
	Brook: {
		email: 'daniel@daniel.com',
		skills: [ 'HTML', 'CSS', 'JavaScript', 'React', 'Redux' ],
		age: 30,
		isLoggedIn: true,
		points: 50
	},
	Daniel: {
		email: 'daniel@alex.com',
		skills: [ 'HTML', 'CSS', 'JavaScript', 'Python' ],
		age: 20,
		isLoggedIn: false,
		points: 40
	},
	John: {
		email: 'john@john.com',
		skills: [ 'HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js' ],
		age: 20,
		isLoggedIn: true,
		points: 50
	},
	Thomas: {
		email: 'thomas@thomas.com',
		skills: [ 'HTML', 'CSS', 'JavaScript', 'React' ],
		age: 20,
		isLoggedIn: false,
		points: 40
	},
	Paul: {
		email: 'paul@paul.com',
		skills: [ 'HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node' ],
		age: 20,
		isLoggedIn: false,
		points: 40
	}
};

console.log(Object.keys(users));

const arr = Object.entries(users);

console.log(arr);

for (let [ key, value ] of arr) {
	if (value.isLoggedIn === true) {
		console.log(`${key} is logged in.`);
	}

	if (value.points >= 50) {
		console.log(`${key} has equal to or greater than 50 points.`);
	}
}
