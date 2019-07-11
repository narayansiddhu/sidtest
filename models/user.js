var mongoose = require('mongoose');

// User Schema
var UserSchema = mongoose.Schema({
	firstname: {
		type: String,
	},
	lastname: {
		type: String
	},
	contact: {
		type: String
	},
	address: {
		type: String
	}
});

var User = module.exports = mongoose.model('User', UserSchema);

