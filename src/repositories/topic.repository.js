const { Topic } = require("./../models/index");

class TopicRepository {
	async createTopic(topicName) {
		try {
			const newTopic = await Topic.create({
				name: topicName,
			});

			return newTopic;
		} catch (error) {
			console.log(error);
			throw error;
		}
	}

	async getAllTopics() {
		try {
			const topics = await Topic.find({});
			return topics;
		} catch (error) {
			console.log(error);
			throw error;
		}
	}
}

module.exports = TopicRepository;
