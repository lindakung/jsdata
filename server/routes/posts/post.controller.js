'use strict'; 

var mongoose = require('mongoose');
var Post = require('./post-model');
var User = require('../users/user-model');



module.exports = {
  index: function(req, res, next) {
    Post.find().exec().then(function(posts) {
      res.json(posts);
    })
    .then(null, next)
  }, 

  show: function(req, res, next){
    Post.findById(req.params.id).exec()
    .then(function(post) {
      res.json(post);
    })
    .then(null, next)
  },

  create: function(req, res, next){
    Post.create(req.body)
    .then(function(article) {
      res.json(article);
    })
    .then(null, next)
  }, 

  update: function(req, res, next){
    var post;
    Post.findOne({_id: req.params.id}).exec()
    .then(function(foundPost) {
      post = foundPost;
      return User.findOne({name: req.body.userName}).exec()
    })
    .then(function(user) {
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
      res.json(updatedPost);
    })
    .then(null, next)
  }, 

  destroy: function(req, res, next){
    Post.findById(req.params.id).then(function(post) {
      console.log('post removed?', post)
      post.remove()
    })
    .then(null, next)
  }

}