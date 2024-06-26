const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
	username: {
		type: String,
		required: [true, "Username cannot be empty"],
	},
	email: {
		type: String,
		required: [true, "Email cannot be empty"],
	},
	bio: {
		type: String,
	},
});

const User = mongoose.model("Users", userSchema);

module.exports = User;
