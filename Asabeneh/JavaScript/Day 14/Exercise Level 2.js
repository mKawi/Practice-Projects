try {
	let lastName = 'Yetayeh';
	let fullName = fistName + ' ' + lastName;
} catch (err) {
	console.log(err);
}

try {
	let lastName = 'Yetayeh';
	let fullName = fistName + ' ' + lastName;
} catch (err) {
	console.error(err); // we can use console.log() or console.error()
} finally {
	console.log('In any case I will be executed');
}

try {
	let lastName = 'Yetayeh';
	let fullName = fistName + ' ' + lastName;
} catch (err) {
	console.log('Name of the error', err.name);
	console.log('Error message', err.message);
} finally {
	console.log('In any case I will be executed');
}

throw 'Error2'; // generates an exception with a string value
throw 42; // generates an exception with the value 42
throw true; // generates an exception with the value true
throw new Error('Required'); // generates an error object with the message of Required
