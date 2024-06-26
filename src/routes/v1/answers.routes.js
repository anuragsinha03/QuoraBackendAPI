const express = require("express");
const commentRouter = require("./comments.routes");
const likeRouter = require("./likes.routes");
const { answerController } = require("./../../controllers");

const answerRouter = express.Router({ mergeParams: true });

answerRouter.post("/", answerController.createAnswer);
answerRouter.put("/:id", answerController.updateAnswer);
answerRouter.use("/:id/comments", commentRouter);
answerRouter.use("/:id/likes", likeRouter);

module.exports = answerRouter;
