var mongoose = require('mongoose');

var schema = new mongoose.Schema({
	body: { 
		type: String, 
		required: true 
	},
	date: { 
		type: Date, 
		default: Date
	}
})

module.exports = mongoose.model('Comment', schema);