'use strict';

var mongoose = require('mongoose');

var schema = new mongoose.Schema({
	username: { 
		type: String, 
		required: true, 
		unique: true 
	},
	password: {
		type: String,
		required: true, 
		unique: true
	}
})

schema.methods.generateHash = function(password) {
	return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null)
};

schema.methods.validPassword = function(password) {
	return bcrypt.compareSync(password, this.local.password)
};

module.exports = mongoose.model('User', schema)