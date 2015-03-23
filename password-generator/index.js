var express = require('express');
var app = express();

app.get('/password', function(req, res) {
	var password = getPassword();

	res.send('New password: '+password);
});

var server = app.listen(3000, function() {
	var host = server.address().address;
	var port = server.address().port;

	console.log('Example app listening at http://%s:%s', host, port);
});

function getPassword() {
    var password = [];
    var letters = "abcdefghijklmnopqrstuvwxyz";
    var number = Math.floor((Math.random()*10));
    var possible = letters.split("");

    for( var i=0; i < 7; i++ ) {
    	var position = Math.floor(Math.random() * possible.length);
    	password.push(possible[position]);
    }
    password.push(number);
    console.log(password);

    return shuffle(password).join("");
}

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex ;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}