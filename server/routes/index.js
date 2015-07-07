'use strict'
var router = require('express').Router();
var mongoose = require('mongoose');

var User = require('../models/user-model');
var Post = require('../models/post-model');
var Comment = require('../models/comment-model');

module.exports = router;

router.get('/users', function(req, res, next) {
	User.find().populate('posts comments').exec().then(function(users) {
		res.json(users);
		next();
	})
})