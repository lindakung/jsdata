
'use strict'; 

var mongoose = require('mongoose');
var Comment = require('./comment-model');



module.exports = {
  index: function(req, res, next) {
    Comment.find().exec()
    .then(function(comments) {
      res.json(comments);
    })
    .then(null, next)
  }
}