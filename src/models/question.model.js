const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema({
	title: {
		type: String,
		required: [true, "Question title cannot be empty"],
	},
	body: {
		type: String,
		required: [true, "Question body cannot be empty"],
	},
	topics: {
		type: [String],
		default: [],
	},
	created_at: {
		type: Date,
		default: Date.now,
	},
	user_id: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "User",
		required: [true, "A question must be asked by a user"],
	},
});

const Question = mongoose.model("Questions", questionSchema);

module.exports = Question;
