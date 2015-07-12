var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');

var app = express();
module.exports = app;

var publicPath = path.join(__dirname, '../public');
var nodeModulesPath = path.join(__dirname, '../node_modules');
var indexHtmlPath = path.join(__dirname, '../index.html');

app.use(express.static(publicPath));
app.use(express.static(nodeModulesPath));


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



app.use('/api', require('./routes'));

app.get('/*', function(req, res) {
	res.sendFile(indexHtmlPath);
});

// app.route('/*')
// 	.get(function(req, res) {
// 		res.sendFile(app.get('appPath') + '/index.html');
// 	})

app.use(function(err, req, res, next) {
	res.status(err.status).send(err.message)
});

