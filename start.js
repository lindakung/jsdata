var server = require('./server');

var PORT = 8080;

server.listen(PORT, function() {
	console.log('Server started on port 8080')
})