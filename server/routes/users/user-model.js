'use strict';

var mongoose = require('mongoose');

var schema = new mongoose.Schema({
	name: { 
		type: String, 
		required: true 
	},
	password: {
		type: String,
		required: true
	}
})

schema.methods.generateHash = function(password) {
	return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null)
};

//check if password is valid
schema.methods.validPassword = function(password) {
	return bcrypt.compareSync(password, this.local.password)
};

module.exports = mongoose.model('User', schema)