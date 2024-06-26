const { Topic } = require("./../models/index");
const logger = require("./../config/logger.config");

class TopicRepository {
	async createTopic(topicName) {
		try {
			const newTopic = await Topic.create({
				name: topicName,
			});

			logger.info(
				`Topic.Repository: [createTopic] - Topic with name: ${topicName} successfully created in the DB.`
			);

			return newTopic;
		} catch (error) {
			console.log(error);
			throw error;
		}
	}

	async getAllTopics() {
		try {
			const topics = await Topic.find({});

			logger.info(
				`Topic.Repository: [getAllTopics] - All Topics successfully fetched from the DB.`
			);
			return topics;
		} catch (error) {
			console.log(error);
			throw error;
		}
	}
}

module.exports = TopicRepository;
