const { Comment } = require("./../models");
const { NotFound } = require("./../errors/notfound.error");

class CommentRepository {
	async createCommentOnAnswer(answerId, userId, text) {
		try {
			// Create a new comment on an answer
			const newComment = await Comment.create({
				parent_id: answerId,
				user_id: userId,
				text: text,
			});

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

			return newComment;
		} catch (error) {
			console.error("Error creating comment on comment:", error);
			throw error;
		}
	}
}

module.exports = CommentRepository;
