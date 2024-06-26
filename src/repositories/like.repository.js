const { Like } = require("./../models");
const NotFound = require("./../errors/notfound.error");
const logger = require("./../config/logger.config");

class LikeRepository {
	async createLike(resourceId, userId) {
		try {
			const newLike = await Like.create({
				resourceId: resourceId,
				userId: userId,
			});

			logger.info(
				`Like.Repository: [createLike] - New like on resource with id: ${resourceId} successfully created by userId: ${userId}`
			);
			return newLike;
		} catch (error) {
			console.log(error);
			throw error;
		}
	}
}

module.exports = LikeRepository;
