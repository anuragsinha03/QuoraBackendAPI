const mongoose = require("mongoose");
const Answer = require("./answer.model"); // Import the Answer model

const commentSchema = new mongoose.Schema({
	text: {
		type: String,
		required: [true, "A comment cannot be empty"],
	},
	parent_id: {
		type: mongoose.Schema.Types.ObjectId,
		required: [
			true,
			"A comment must be commented on an answer or another comment",
		],
	},
	user_id: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "User",
		required: [true, "A comment must be made by a user"],
	},
	created_at: {
		type: Date,
		default: Date.now,
	},
});

commentSchema.pre("save", async function (next) {
	const Comment = mongoose.model("Comment");
	const parentExistsInAnswer = await Answer.exists({ _id: this.parent_id });
	const parentExistsInComment = await Comment.exists({ _id: this.parent_id });

	if (!parentExistsInAnswer && !parentExistsInComment) {
		const error = new Error(
			"parent_id must reference either 'Answer' or 'Comment'"
		);
		error.name = "ValidationError";
		return next(error);
	}

	next();
});

const Comment = mongoose.model("Comment", commentSchema);

module.exports = Comment;
