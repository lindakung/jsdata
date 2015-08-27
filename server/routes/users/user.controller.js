
'use strict'; 

var mongoose = require('mongoose');
var User = require('./user-model');

module.exports = {
  index: function(req, res, next) {
    User.find({}).exec()
    .then(function(users) {
      res.json(users);
    })
    .then(null, next)
  }, 

  show: function(req, res, next){
    User.findById(req.params.id).exec()
    .then(function(user) {
      res.json(user);
    })
    .then(null, next)
  },

  create: function(req, res, next){
    User.create(req.body)
    .then(function(newUser) {
      res.json(newUser);
    })
    .then(null, next)
  }
}