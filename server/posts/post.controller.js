'use strict'; 

var mongoose = require('mongoose');
var Post = require('./post-model');
var User = require('../users/user-model');


module.exports = {
  index: function(req, res, next) {
    Post.find().exec()
    .then(function(posts) {
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
  destroy: function(req, res, next){
    Post.remove({_id: req.params.id})
    .then(function() {
      res.status(204).end()
    })
    .then(null, next)
  }

}