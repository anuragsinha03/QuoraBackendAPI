class QuestionService {
	constructor(questionRepository) {
		this.questionRepository = questionRepository;
	}

	async createQuestion(questionData) {
		const question = await this.questionRepository.createQuestion(
			questionData
		);
		return question;
	}

	async searchQuestion(text, tag) {
		const questions = await this.questionRepository.searchQuestion(
			text,
			tag
		);
		return questions;
	}
}

module.exports = QuestionService;
