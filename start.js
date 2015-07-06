var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/jsdata');

var server = require('./server');

var PORT = 8080;

mongoose.connection.once('open', function() {
	server.listen(PORT, function() {
		console.log('Server started on port 8080')
	});
});