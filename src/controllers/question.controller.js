const { StatusCodes } = require("http-status-codes");
const { QuestionService } = require("./../services");
const { QuestionRepository } = require("./../repositories");

const questionService = new QuestionService(new QuestionRepository());

function pingQuestionController(req, res) {
	return res.json({
		message: "Question Controller is running",
	});
}

async function createQuestion(req, res, next) {
	try {
		const newQuestion = await questionService.createQuestion(req.body);
		return res.status(StatusCodes.CREATED).json({
			success: true,
			message: "Successfully created a new question",
			error: {},
			data: newQuestion,
		});
	} catch (error) {
		next(error);
	}
}

async function searchQuestion(req, res, next) {
	try {
		const text = req.query.text;
		const tag = req.query.tag;
		const questions = await questionService.searchQuestion(text, tag);
		return res.status(StatusCodes.OK).json({
			success: true,
			message: `Successfully fetched all question with text:${text} / tags:${tag}`,
			error: {},
			data: questions,
		});
	} catch (error) {
		next(error);
	}
}

module.exports = {
	pingQuestionController,
	createQuestion,
	searchQuestion,
};
