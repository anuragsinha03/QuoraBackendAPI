const { Comment } = require("./../models");
const NotFound = require("./../errors/notfound.error");
const logger = require("./../config/logger.config");

class CommentRepository {
	async createCommentOnAnswer(answerId, userId, text) {
		try {
			// Create a new comment on an answer
			const newComment = await Comment.create({
				parent_id: answerId,
				user_id: userId,
				text: text,
			});
			logger.info(
				`Comment.Repository: [createCommentOnAnswer] - New comment on answer with id: ${answerId} successfully created by userId: ${userId}`
			);
			return newComment;
		} catch (error) {
			console.error("Error creating comment on answer:", error);
			throw error;
		}
	}

	async createCommentOnComment(commentId, userId, text) {
		try {
			// Create a new comment on another comment
			const newComment = await Comment.create({
				parent_id: commentId,
				user_id: userId,
				text: text,
			});

			logger.info(
				`Comment.Repository: [createCommentOnComment] - New comment on comment with id: ${commentId} successfully created by userId: ${userId}`
			);
			return newComment;
		} catch (error) {
			console.error("Error creating comment on comment:", error);
			throw error;
		}
	}
}

module.exports = CommentRepository;
