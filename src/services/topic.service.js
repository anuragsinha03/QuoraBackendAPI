class TopicService {
	constructor(topicRepository) {
		this.topicRepository = topicRepository;
	}

	async createTopic(topicName) {
		const topic = await this.topicRepository.createTopic(topicName);
		return topic;
	}

	async getAllTopics() {
		const topics = await this.topicRepository.getAllTopics();
		return topics;
	}
}

module.exports = TopicService;
