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
	User.findById(req.params.id).exec().then(function(user) {
		res.json(user);
		if(err) next(err);		
	})
})

router.post('/users', function(req, res, next) {
	User.create(req.body).then(function(newUser) {
		res.json(newUser);
		if(err) next(err);
	})
})

router.get('/posts', function(req, res, next) {
	Post.find().exec().then(function(posts) {
		res.json(posts);
		if(err) next(err);
	})
})

router.post('/posts', function(req, res, next) {
	console.log('REQ BODY', req.body);
	Post.create(req.body).then(function(article) {
		article.author = req.body.author;
		res.json(article);
		if(err) return next(err);
	})
})

//get post by id
router.get('/posts/:id', function(req, res, next) {
	Post.findById(req.params.id).then(function(post) {
		res.json(post);
		if(err) next(err);
	})
})



router.get('/comments', function(req, res, next) {
	Comment.find().exec().then(function(comments) {
		res.json(comments);
		if(err) next(err);
	})
})
