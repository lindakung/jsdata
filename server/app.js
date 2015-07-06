var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');

var User = require('./models/user-model');
var Post = require('./models/post-model');
var Comment = require('./models/comment-model');

var app = express();
module.exports = app;

var publicPath = path.join(__dirname, '../public');
var nodeModulesPath = path.join(__dirname, '../node_modules');
var indexHtmlPath = path.join(__dirname, '../index.html');

app.use(express.static(publicPath));
app.use(express.static(nodeModulesPath));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function(req, res) {
	res.sendFile(indexHtmlPath);
});

app.get(function(req, res, next) {
	console.log('made it!');
	next();
});

app.get('/users', function(req, res, next) {
	User.find().populate('posts comments').exec().then(function(users) {
		res.json(users);
		next();
	})
})

