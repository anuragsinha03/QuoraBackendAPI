const express = require("express");
const { questionController } = require("./../../controllers");
const answerRouter = require("./answers.routes");
const likeRouter = require("./likes.routes");
const questionRouter = express.Router({ mergeParams: true });

// questionRouter.get("/ping", questionController.pingQuestionController);
questionRouter.post("/", questionController.createQuestion);
questionRouter.get("/search", questionController.searchQuestion);
questionRouter.use("/:id/answers", answerRouter);
questionRouter.use("/:id/likes", likeRouter);

module.exports = questionRouter;
