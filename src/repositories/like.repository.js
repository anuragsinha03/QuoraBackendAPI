const { Like } = require("./../models");
const { NotFound } = require("./../errors/notfound.error");

class LikeRepository {
	async createLike(resourceId, userId) {
		try {
			const newLike = await Like.create({
				resourceId: resourceId,
				userId: userId,
			});

			return newLike;
		} catch (error) {
			console.log(error);
			throw error;
		}
	}
}

module.exports = LikeRepository;
