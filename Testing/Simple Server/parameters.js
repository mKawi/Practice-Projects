const express = require('../../node_modules/express');
const app = express();
const fs = require('fs');

app.get('/', function(req, res) {
	res.send('Simple Example of routes!');
});

app.get('/signup', function(req, res) {
	// this is how we will receive params from front end

	const name = req.query.name;
	const email = req.query.email;
	const password = req.query.password;
	//For demo purpose
	console.log(name + '' + email + ' ' + password);

	/**
   * Store this in a database and perform further processing
   */
	res.send('In signup module');
});

app.listen(3000, function() {
	console.log('Server is listening at 3000');
});
