const { StatusCodes } = require("http-status-codes");
const { LikeService } = require("./../services");
const { LikeRepository } = require("./../repositories");

const likeService = new LikeService(new LikeRepository());

function pingLikeController(req, res) {
	return res.json({
		message: "Like Controller is running",
	});
}

async function createLike(req, res, next) {
	try {
		const resourceId = req.params.id;
		const { userId } = req.body;
		const newLike = await likeService.createLike(resourceId, userId);
		return res.status(StatusCodes.CREATED).json({
			success: true,
			message: `Successfully liked the resource with ID: ${resourceId}`,
			error: {},
			data: newLike,
		});
	} catch (error) {
		next(error);
	}
}

module.exports = {
	pingLikeController,
	createLike,
};
