const { StatusCodes } = require("http-status-codes");
const { CommentService } = require("./../services");
const { CommentRepository } = require("./../repositories");

const commentService = new CommentService(new CommentRepository());

function pingCommentController(req, res) {
	return res.json({
		message: "Comment Controller is running",
	});
}

async function createCommentOnAnswer(req, res, next) {
	try {
		const answer_id = req.params.id;
		const { user_id, text } = req.body;
		const newComment = await commentService.createCommentOnAnswer(
			answer_id,
			user_id,
			text
		);
		return res.status(StatusCodes.CREATED).json({
			success: true,
			message: `Successfully commented on the answer with ID:${answer_id}`,
			error: {},
			data: newComment,
		});
	} catch (error) {
		next(error);
	}
}

async function createCommentOnComment(req, res, next) {
	try {
		const comment_id = req.params.id;
		const { user_id, text } = req.body;

		const newComment = await commentService.createCommentOnComment(
			comment_id,
			user_id,
			text
		);
		return res.status(StatusCodes.CREATED).json({
			success: true,
			message: `Successfully commented on the comment with ID:${comment_id}`,
			error: {},
			data: newComment,
		});
	} catch (error) {
		next(error);
	}
}

module.exports = {
	pingCommentController,
	createCommentOnAnswer,
	createCommentOnComment,
};
