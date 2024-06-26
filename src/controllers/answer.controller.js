const { StatusCodes } = require("http-status-codes");
const { AnswerService } = require("./../services");
const { AnswerRepository } = require("./../repositories");

const answerService = new AnswerService(new AnswerRepository());

function pingAnswerController(req, res) {
	return res.json({
		message: "Answer Controller is running",
	});
}

async function createAnswer(req, res, next) {
	try {
		const question_id = req.params.id;
		const { user_id, text } = req.body;
		const newAnswer = await answerService.createAnswer(
			question_id,
			user_id,
			text
		);
		return res.status(StatusCodes.CREATED).json({
			success: true,
			message: "Successfully created a new answer",
			error: {},
			data: newAnswer,
		});
	} catch (error) {
		next(error);
	}
}

async function updateAnswer(req, res, next) {
	try {
		const answerId = req.params.id;
		const updatedAnswer = await answerService.updateAnswer(
			answerId,
			req.body
		);
		return res.status(StatusCodes.OK).json({
			success: true,
			message: `Successfully updated the answer with ID:${answerId}`,
			error: {},
			data: updatedAnswer,
		});
	} catch (error) {
		next(error);
	}
}

module.exports = {
	pingAnswerController,
	createAnswer,
	updateAnswer,
};
