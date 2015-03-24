//Configure server
var express = require('express');
var app = express();

var server = app.listen(3000, function() {
	var host = server.address().address;
	var port = server.address().port;

	console.log('App running at http://%s:%s', host, port);
});

//other modules
var bodyParser = require('body-parser');
var multer = require('multer');
//database
var mongoose = require('mongoose'); 
//mongodb - mongodb://{database-url}/{database-name}
mongoose.connect('mongodb://localhost/mongodb');

//project files
require('./models/users.js');

//configure express to use some modules
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(multer()); // for parsing multipart/form-data

//----------------------------------------------------------------------

//Use static files from the folder static
app.use(express.static('static'));

//GET
app.get('/users', function(req, res) {
	mongoose.model('users').find(function(err, users) {
		res.send(users);
	});
});

//POST
app.post('/save', function(req, res) {
	var user = req.body;
	var t = new User(user);
	t.save(function (err) {
	if (err) // ...
		console.log('erro');
	});
 	res.json(user);
});