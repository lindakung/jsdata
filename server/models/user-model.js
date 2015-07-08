var mongoose = require('mongoose');
var Post = require('./post-model.js');
var Comment = require('./comment-model.js');

var schema = new mongoose.Schema({
	name: { 
		type: String, 
		required: true 
	}
})

module.exports = mongoose.model('User', schema)