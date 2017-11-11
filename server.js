//var express 	= require('express');
//var app 		= express();
var app 		= require('express')();
var bodyparser 	= require('body-parser');
var mongoose 	= require('mongoose');
var db 			= mongoose.connect("mongodb://localhost/sarah-sliman-power-group");

// prep to be JSON & urlencode only vars
//app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:false}));


app.all('/*', function(req, res, next) {
	// CORS headers
	res.header("Access-Control-Allow-Origin", "*"); // restrict it to the required domain
	res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
	// Set custom headers for CORS
	res.header('Access-Control-Allow-Headers', 'Content-type,Accept,X-Access-Token,X-Key');
	if (req.method == 'OPTIONS') {
		res.status(200).end();
	} else {
		next();
	}
});

app.use('/', require('./routes'));

// If no route is matched by now, it must be a 404
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});
 
// Start the server
app.set('port', process.env.PORT || 3005);
 
var server = app.listen(app.get('port'), function() {
  console.log('Express server listening on port ' + server.address().port);
});
