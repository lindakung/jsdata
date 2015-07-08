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
			if(err) next(err);
	})
})

//user by id

router.get('/users/:id', function(req, res, next) {
	User.findById(req.params.id).populate('posts comments').exec().then(function(user) {
		res.json(user);
		if(err) next(err);		
	})
})

router.get('/posts', function(req, res, next) {
	Post.find().exec().then(function(posts) {
		res.json(posts);
		if(err) next(err);
	})
})

router.get('/comments', function(req, res, next) {
	Comment.find().exec().then(function(comments) {
		res.json(comments);
		if(err) next(err);
	})
})
