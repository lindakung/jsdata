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
	}).then(null, next)
})

//user by id

router.get('/users/:id', function(req, res, next) {
	User.findById(req.params.id).exec().then(function(user) {
		res.json(user);
	}).then(null, next)
})

router.post('/users', function(req, res, next) {
	User.create(req.body).then(function(newUser) {
		res.json(newUser);
	}).then(null, next);
})

// router.put('/users/:id', function(req, res, next) {
// 	console.log('hitting user update', req.body)
// 	User.update({id: req.body._id}, req.body).then(function(updatedUser) {
// 		res.json(updatedUser)
// 	}).then(null, next)
// })

router.get('/posts', function(req, res, next) {
	Post.find().exec().then(function(posts) {
		res.json(posts);
	}).then(null, next)
})

router.post('/posts', function(req, res, next) {
	Post.create(req.body).then(function(article) {
		res.json(article);
	}).then(null, next)
})

router.put('/posts/:id', function(req, res, next) {
	var post;
	console.log('req: ', req.body)
	Post.findOne({_id: req.params.id}).exec()
	.then(function(foundPost) {
		console.log('found: ', foundPost)
		post = foundPost;
		return User.findOne({name: req.body.userName}).exec()
	})
	.then(function(user) {
		console.log('user: ', user)
		if (!user) {
			return User.create({name: req.body.name})
			.then(function(newUser) {
				post.author = newUser._id;
				post.title = req.body.title;
				return post.save()
			})
		} else {
			post.author = user._id;
			post.title = req.body.title;
			post.body = req.body.body; 
			return post.save()
		}
	})
	.then(function(updatedPost) {
		console.log('updated', updatedPost)
		res.json(updatedPost);
	})
	.then(null, next)
})

//get post by id
router.get('/posts/:id', function(req, res, next) {
	Post.findById(req.params.id).then(function(post) {
		res.json(post);
	}).then(null, next)
})

router.delete('/posts/:id', function(req, res, next) {
	Post.findById(req.params.id).then(function(post) {
		console.log('post removed?', post)
		post.remove()
	}).then(null, next)
})


router.get('/comments', function(req, res, next) {
	Comment.find().exec().then(function(comments) {
		res.json(comments);
	}).then(null, next)
})

router.use(function(req, res) {
	res.status(404).end();
})