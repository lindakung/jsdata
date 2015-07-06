var mongoose = require('mongoose');
var Post = require('./post-model.js');
var Comment = require('./comment-model.js');

var schema = new mongoose.Schema({
	name: { 
		type: String, 
		required: true 
	},
	posts: [{ 
		type: mongoose.Schema.Types.ObjectId, 
		ref: "Post" 
	}],
	comments: [{ 
		type: mongoose.Schema.Types.ObjectId, 
		ref: "Comment" }]
})

module.exports = mongoose.model('User', schema)