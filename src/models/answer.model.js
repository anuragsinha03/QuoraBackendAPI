const mongoose = require("mongoose");

const answerSchema = new mongoose.Schema({
	text: {
		type: String,
		required: [true, "Answer text cannot be empty"],
	},
	question_id: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "Question",
		required: [true, "An answer must belong to a question"],
	},
	user_id: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "User",
		required: [true, "An answer must be answered by a user"],
	},
	created_at: {
		type: Date,
		default: Date.now,
	},
});

const Answer = mongoose.model("Answers", answerSchema);

module.exports = Answer;
