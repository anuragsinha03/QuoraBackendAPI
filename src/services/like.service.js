class LikeService {
	constructor(likeRepository) {
		this.likeRepository = likeRepository;
	}

	async createLike(resourceId, userId) {
		const newLike = await this.likeRepository.createLike(
			resourceId,
			userId
		);
		return newLike;
	}
}

module.exports = LikeService;
