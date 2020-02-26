const student = {
	firstName: 'Moudi',
	lastName: 'Kawi',
	age: 23,
	skills: [ 'HTML', 'CSS', 'JavaScript' ],
	country: 'United Kingdom',
	enrolled: {
		compSci: true,
		maths: true,
		furtherMaths: true,
		english: false
	}
};

const studentJSON = JSON.stringify(student);

localStorage.setItem('student', studentJSON);
