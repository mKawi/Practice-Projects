const student = [ 'David', [ 'HTM', 'CSS', 'JS', 'React' ], [ 98, 85, 90, 95 ] ];

const [ name, [ ...skills ], [ htmScore, cssScore, jsScore, reactScore ] ] = student;

console.log(name, skills, jsScore, reactScore);

const students = [
	[ 'David', [ 'HTM', 'CSS', 'JS', 'React' ], [ 98, 85, 90, 95 ] ],
	[ 'John', [ 'HTM', 'CSS', 'JS', 'React' ], [ 85, 80, 85, 80 ] ]
];

const convertArrayToObjects = ([ ...args ]) => {
	const newObject = {
		...args
	};

	console.log(newObject);
};

convertArrayToObjects(students);

const newStudent = {
	name: 'David',
	age: 25,
	skills: {
		frontEnd: [
			{ skill: 'HTML', level: 10 },
			{ skill: 'CSS', level: 8 },
			{ skill: 'JS', level: 8 },
			{ skill: 'React', level: 9 }
		],
		backEnd: [ { skill: 'Node', level: 7 }, { skill: 'GraphQL', level: 8 } ],
		dataBase: [ { skill: 'MongoDB', level: 7.5 } ],
		dataScience: [ 'Python', 'R', 'D3.js' ]
	}
};

const copyStudent = { ...newStudent };

console.log(copyStudent);
