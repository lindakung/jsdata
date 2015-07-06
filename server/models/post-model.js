var mongoose = require('mongoose');
var User = require('./user-model.js');

var schema = new mongoose.Schema({
	title: {
		type:String, 
		required: true
	},
	body: {
		type: String, 
		required: true
	},
	date: {
		type: Date, 
		default: Date.now
	},
	tags: [String]
})

module.exports = mongoose.model('Post', schema);