const { Answer } = require("./../models");
const { NotFound } = require("./../errors/notfound.error");

class AnswerRepository {
	async createAnswer(questionId, userId, text) {
		try {
			const newAnswer = await Answer.create({
				question_id: questionId,
				user_id: userId,
				text: text,
			});

			return newAnswer;
		} catch (error) {
			console.log(error);
			throw error;
		}
	}

	async updateAnswer(answerId, answerData) {
		try {
			const updatedAnswer = await Answer.findByIdAndUpdate(
				answerId,
				answerData,
				{
					new: true,
				}
			);

			if (!updatedAnswer) {
				throw new NotFound("Answer", answerId);
			}

			return updatedAnswer;
		} catch (error) {
			console.log(error);
			throw error;
		}
	}
}

module.exports = AnswerRepository;
