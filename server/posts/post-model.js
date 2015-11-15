'use strict';

var mongoose = require('mongoose');

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
	author: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "User", required: true
	}
})

module.exports = mongoose.model('Post', schema);