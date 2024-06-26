const { Question } = require("./../models");
const { NotFound } = require("./../errors/notfound.error");

class QuestionRepository {
	async createQuestion(questionData) {
		try {
			const newQuestion = await Question.create({
				title: questionData.title,
				body: questionData.body,
				topics: questionData.topicTags,
				user_id: questionData.user_id,
			});

			return newQuestion;
		} catch (error) {
			console.log(error);
			throw error;
		}
	}

	async searchQuestion(text, tag) {
		try {
			const query = {};

			if (text) {
				query.$or = [
					{ title: { $regex: text, $options: "i" } }, // case-insensitive search in title
					{ body: { $regex: text, $options: "i" } }, // case-insensitive search in body
				];
			}

			if (tag) {
				if (!query.$or) query.$or = [];
				query.$or.push({ topicTags: { $regex: tag, $options: "i" } }); // case-insensitive search in topicTags
			}

			const questions = await Question.find(query);
			if (!questions) {
				throw new NotFound("Question", text);
			}

			return questions;
		} catch (error) {
			console.log(error);
			throw error;
		}
	}
}

module.exports = QuestionRepository;
