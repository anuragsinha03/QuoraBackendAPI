const { StatusCodes } = require("http-status-codes");
const { TopicService } = require("./../services");
const { TopicRepository } = require("./../repositories");

const topicService = new TopicService(new TopicRepository());

function pingTopicController(req, res) {
	return res.json({
		message: "Topic Controller is running",
	});
}

async function createTopic(req, res, next) {
	try {
		const { name } = req.body;
		const newTopic = await topicService.createTopic(name);
		return res.status(StatusCodes.CREATED).json({
			success: true,
			message: "Successfully created a new topic",
			error: {},
			data: newTopic,
		});
	} catch (error) {
		next(error);
	}
}

async function getAllTopics(req, res, next) {
	try {
		const allTopics = await topicService.getAllTopics();
		return res.status(StatusCodes.OK).json({
			success: true,
			message: `Successfully fetched all the topics`,
			error: {},
			length: allTopics.length,
			data: allTopics,
		});
	} catch (error) {
		next(error);
	}
}

module.exports = {
	pingTopicController,
	createTopic,
	getAllTopics,
};
