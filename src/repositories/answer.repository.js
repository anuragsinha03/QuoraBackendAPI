const { Answer } = require("./../models");
const NotFound = require("./../errors/notfound.error");
const logger = require("./../config/logger.config");

class AnswerRepository {
	async createAnswer(questionId, userId, text) {
		try {
			const newAnswer = await Answer.create({
				question_id: questionId,
				user_id: userId,
				text: text,
			});

			logger.info(
				`Answer.Repository: [createAnswer] - New Answer for questionId: ${questionId} successfully created by userId: ${userId}`
			);
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
				logger.error(
					`Answer.Repository: [updateAnswer] - Answer with ID: ${answerId} not found in the DB.`
				);
				throw new NotFound("Answer", answerId);
			}

			logger.info(
				`Answer.Repository: [updateAnswer] - Answer with ID: ${answerId} successfully updated in the DB.`
			);
			return updatedAnswer;
		} catch (error) {
			console.log(error);
			throw error;
		}
	}
}

module.exports = AnswerRepository;
