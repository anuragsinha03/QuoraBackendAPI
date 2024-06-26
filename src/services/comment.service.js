class CommentService {
	constructor(commentRepository) {
		this.commentRepository = commentRepository;
	}

	async createCommentOnAnswer(answerId, userId, text) {
		const newComment = await this.commentRepository.createCommentOnAnswer(
			answerId,
			userId,
			text
		);
		return newComment;
	}

	async createCommentOnComment(commentId, userId, text) {
		const newComment = await this.commentRepository.createCommentOnComment(
			commentId,
			userId,
			text
		);
		return newComment;
	}
}

module.exports = CommentService;
