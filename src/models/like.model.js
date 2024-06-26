const mongoose = require("mongoose");
const Answer = require("./answer.model");
const Comment = require("./comment.model");
const Question = require("./question.model");
const likeSchema = new mongoose.Schema({
	resourceId: {
		type: mongoose.Schema.Types.ObjectId,
		required: [
			true,
			"A like must be done on an answer, comment or question",
		],
	},
	userId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "User",
		required: [true, "A like must be made by a user"],
	},
	created_at: {
		type: Date,
		default: Date.now,
	},
});

likeSchema.pre("save", async function (next) {
	// const Like = mongoose.model("Like");
	const parentExistsInQuestion = await Question.exists({
		_id: this.resourceId,
	});
	const parentExistsInAnswer = await Answer.exists({ _id: this.resourceId });
	const parentExistsInComment = await Comment.exists({
		_id: this.resourceId,
	});

	if (
		!parentExistsInAnswer &&
		!parentExistsInComment &&
		!parentExistsInQuestion
	) {
		const error = new Error(
			"resourceId must reference either 'Answer', 'Comment' or 'Question'"
		);
		error.name = "ValidationError";
		return next(error);
	}

	next();
});

const Like = mongoose.model("Likes", likeSchema);

module.exports = Like;
